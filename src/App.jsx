import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import PrototypeCarousel from "./components/PrototypeCarousel";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="prototypecarousel" element={<PrototypeCarousel />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
