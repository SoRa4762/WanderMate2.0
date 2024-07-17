import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import PrototypeCarousel from "./components/PrototypeCarousel";
import TravelPackages from "./pages/TravelPackages";
import Hotels from "./pages/Hotels";
import NotFound from "./pages/NotFound";
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
            <Route path="travelpackages" element={<TravelPackages />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
