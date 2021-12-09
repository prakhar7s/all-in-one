import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/landing-page/landing-page";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default MainRoutes;
