import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import TravelPackages from "./pages/TravelPackages/TravelPackages";
import TravelPackage from "./pages/TravelPackages/TravelPackage";
import Hotels from "./pages/Hotels/Hotels";
import Hotel from "./pages/Hotels/Hotel";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import ManageHotels from "./pages/Dashboard/ManageHotels";
import ManageTravelPackages from "./pages/Dashboard/ManageTravelPackages";
import RedirectIfAuthenticated from "./pages/Protected/RedirectIfAuthenticated";
import Protected from "./pages/Protected/Protected";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Redirect authenticated users away from SignIn and SignUp pages update */}
        <Route
          path="/signin"
          element={
            <RedirectIfAuthenticated>
              <SignIn />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectIfAuthenticated>
              <SignUp />
            </RedirectIfAuthenticated>
          }
        />

        {/* Protected Routes for User Layout */}
        <Route
          path="/user"
          element={
            <Protected allowedRoles={["User"]}>
              <UserLayout />
            </Protected>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="travelpackages" element={<TravelPackages />} />
          <Route path="travelpackages/:id" element={<TravelPackage />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/:id" element={<Hotel />} />
          <Route path="profile/:userId" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Protected Routes for Admin (Dashboard Layout) */}
        <Route
          path="/dashboard"
          element={
            <Protected allowedRoles={["Admin"]}>
              <DashboardLayout />
            </Protected>
          }
        >
          <Route path="manage-hotels" element={<ManageHotels />} />
          <Route path="manage-packages" element={<ManageTravelPackages />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
