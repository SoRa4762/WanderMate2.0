import { Navigate } from "react-router-dom";
import axios from "axios";

function Protected({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const expiresIn = localStorage.getItem("expiresIn");

  // If there's no token or required data, redirect to SignIn page
  if (!token || !role || !expiresIn) {
    return <Navigate to="/signin" replace />;
  }

  const currentTime = Date.now() / 1000;

  // Check if the token has expired
  if (currentTime > expiresIn) {
    // Clear stored token details and redirect to SignIn
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("expiresIn");
    return <Navigate to="/signin" replace />;
  }

  // Verify token with the backendhe
  const verifyToken = async () => {
    try {
      const response = await axios.get("http://localhost:5171/api/Auth/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        // If the token is not valid, clear stored data and redirect to SignIn
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("expiresIn");
        return <Navigate to="/signin" replace />;
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      // Handle token verification failure (optional)
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("expiresIn");
      return <Navigate to="/signin" replace />;
    }
  };

  // Call token verification
  verifyToken();

  // Check if the user's role is included in the allowedRoles array
  if (!allowedRoles.includes(role)) {
    // Redirect based on role
    return <Navigate to={role === "Admin" ? "/dashboard" : "/user/home"} replace />;
  }

  // If authorized and the token is valid, render the protected content
  return children;
}

export default Protected;

