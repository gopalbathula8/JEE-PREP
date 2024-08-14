import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Signup from "./Signup";
import Forgotten from "./Forgotten";
import Resetpassword from "./resetpassword";
import Home from "./home";
import CollegeList from "./colleges";
import References from "./references";
import Exam from "./exam";
import Counselling from "./counselling";
import { Navigate } from "react-router-dom";
import ProfilePage from "./profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotpassword" element={<Forgotten />}></Route>
        <Route path="/resetpassword" element={<Resetpassword />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/references" element={<References />}></Route>
        <Route path="/colleges" element={<CollegeList />}></Route>
        <Route path="/counselling" element={<Counselling />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
