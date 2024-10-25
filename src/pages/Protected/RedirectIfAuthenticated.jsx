import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectIfAuthenticated = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkAuthentication = async () => {
      if (token) {
        try {
          const response = await axios.get("http://localhost:5171/api/Auth/verify-token", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response.status === 200) {
            // Redirect to the user's home page if the token is valid
            navigate("/user/home", { replace: true });
          }
        } catch (error) {
          console.error("Token verification failed:", error);
          // Handle token verification failure (optional)
        }
      }
    };

    checkAuthentication();
  }, [navigate, token]);

  // If not authenticated, render the SignIn or SignUp page
  return children;
};

export default RedirectIfAuthenticated;
