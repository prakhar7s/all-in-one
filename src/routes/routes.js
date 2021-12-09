import { Routes, Route } from "react-router-dom";
import About from "../components/about/about";
import Blogs from "../components/blogs/blogs";
import LandingPage from "../components/landing-page/landing-page";
import Projects from "../components/projects/projects";
import Resume from "../components/resume/resume";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default MainRoutes;
