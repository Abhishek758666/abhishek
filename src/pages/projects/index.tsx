import PROJECTS_DATA from "./components/config.json";
import ProjectCard from "./components/project-card";

const Projects = () => {
  return (
    <div className="w-full h-max p-4">
      <div className="h-max w-full max-w-2xl mx-auto flex flex-col gap-1">
        <h1 className="text-4xl font-bold mt-24">Projects</h1>
        <p className="text-xl">These are the works i have done for clients</p>
        {PROJECTS_DATA.map((project, i) => {
          return <ProjectCard key={project.title} {...project} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
