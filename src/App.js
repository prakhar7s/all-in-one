import "./App.css";
import ProjectCard from "./components/project-card/project-card";

import { reactProjects } from "./assets/project-data/react-projects.js";

function App() {
  return (
    <div className="projects">
      {reactProjects.map((reactProject) => (
        <ProjectCard key={reactProject.projectID} data={reactProject} />
      ))}
    </div>
  );
}

export default App;
