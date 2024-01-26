import NavBar from "../components/NavBar/NavBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import projectList from "../utils/projectList";

export default function Projects() {
  return (
    <div>
      <header className="mobile-header">
        <NavBar />
      </header>
      <h1 className="page-title">Projects</h1>
      <div className="projects-container">
        {projectList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
