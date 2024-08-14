const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const express = require("express");
const mysql = require('mysql');
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use(express.json()); // Corrected usage
// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

// Check if email exists
const checkEmailExists = (email, callback) => {
    const sql = "SELECT * FROM login WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.length > 0);
    });
};

// Post method for signup
app.post('/signup', (req, res) => {
    const { name, email, password2, pet, color } = req.body;

    console.log(req.body); // Debug: Print the request body

    // Check if the email already exists
    checkEmailExists(email, (err, exists) => {
        if (err) {
            console.error("Error checking email existence: ", err);
            return res.status(500).json("Error checking email");
        }
        
        if (exists) {
            return res.status(400).json("Email already exists");
        }

        // Writing SQL query and storing it in a variable
        const sql = "INSERT INTO login (name, email, password, pet, color) VALUES (?, ?, ?, ?, ?)";
        const values = [name, email, password2, pet, color];

        // Executing the SQL query
        db.query(sql, values, (err, data) => {
            if (err) {
                console.error("Error inserting data: ", err);
                return res.status(500).json("Error");
            }
            console.log("Data inserted successfully: ", data);
            return res.status(200).json(data);
        });
    });
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;
        // Writing SQL query and storing it in a variable
     const sql = "SELECT * FROM  login WHERE `email`=? AND `password`=?";
    // Executing the SQL query
    const values = [email, password];
     db.query(sql,values, (err, data) => {
        if (err) {
            return res.json("Error");
        }
         if (data.length > 0) {
             const name = data[0].name;
             const token = jwt.sign({ name }, "jee-prep-react-secret-key", { expiresIn: '7d' });
             res.cookie('token', token);
            return res.json("success");
        }
        else {
            return res.json("fail");
        } 
     });
});

app.post('/forgotpassword', (req, res) => {
    const {email,pet,color} = req.body;
        // Writing SQL query and storing it in a variable
    const sql = "SELECT * FROM  login WHERE `email`=? AND `pet`=? AND `color`=?";
    // Executing the SQL query
    const values = [email, pet, color];
     db.query(sql,values, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("success");
        }
        else {
            return res.json("fail");
        } 
     });
});

app.post('/resetpassword', (req, res) => {
    const { email, newPassword } = req.body;

    // Writing SQL query and storing it in a variable
    const sql = "UPDATE login SET `password`=? WHERE `email`=?";
    const values = [newPassword, email];

    // Executing the SQL query
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error updating password: ", err);
            return res.status(500).json("Error updating password");
        }
        console.log("Password updated successfully: ", data);
        return res.status(200).json("Password updated successfully");
    });
});
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status:"success"})
})
app.get('/check-auth', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Status: "fail" });
    }

    jwt.verify(token, "jee-prep-react-secret-key", (err, user) => {
        if (err) {
            return res.json({ Status: "fail" });
        }
        return res.json({ Status: "success", user });
    });
});
app.get('/profile', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ Status: "fail", message: "Not authenticated" });
    }

    jwt.verify(token, "jee-prep-react-secret-key", (err, user) => {
        if (err) {
            return res.status(403).json({ Status: "fail", message: "Invalid token" });
        }

        const sql = "SELECT * FROM login WHERE name = ?";
        db.query(sql, [user.name], (err, results) => {
            if (err) {
                return res.status(500).json({ Status: "fail", message: "Database error" });
            }
            if (results.length > 0) {
                res.json({ Status: "success", profile: results[0] });
            } else {
                res.status(404).json({ Status: "fail", message: "User not found" });
            }
        });
    });
});

// Starting the server
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
