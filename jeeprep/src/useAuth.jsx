import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:8081/check-auth", {
          withCredentials: true,
        });
        if (response.data.Status !== "success") {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);
};

export default useAuth;
