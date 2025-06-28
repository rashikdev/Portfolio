import ProjectCard from "./ProjectCard";

const Projects = ({ project }) => {
  const projects = [
    {
      id: 1,
      title: "TaskFlow",
      image: "https://via.placeholder.com/600x400",
      description_small:
        "TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking.",
      description_large:
        "TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking. TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking.",
      features: ["Real-time updates", "Drag & drop", "Responsive UI"],
      stack: ["React", "TailwindCSS", "Firebase"],
      live: "https://taskflow.live",
      github: "https://github.com/yourname/taskflow-client",
    },
    {
      id: 2,
      title: "DevPortfolio",
      image: "https://via.placeholder.com/600x400",
      description_small:
        "TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking.",
      description_large:
        "TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking. TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking.",
      features: ["Smooth scroll", "Dark mode", "Scroll snapping"],
      stack: ["React", "Framer Motion", "TailwindCSS"],
      live: "https://devportfolio.live",
      github: "https://github.com/yourname/devportfolio-client",
    },
    {
      id: 3,
      title: "StudySync",
      image: "https://via.placeholder.com/600x400",
      description_small:
        "TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking.",
      description_large:
        "TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking. TaskFlow is a task management app for teams. It includes real-time updates, drag-and-drop features, and activity tracking.",
      features: ["JWT auth", "Assignment tracking", "Group chat"],
      stack: ["MERN", "Socket.io", "TailwindCSS"],
      live: "https://studysync.live",
      github: "https://github.com/yourname/studysync-client",
    },
  ];
  return (
    <div className="md:mt-30 mt-20 lg:-mt-4">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-primary">Projects</h2>
        <p className="text-secondary mt-2 px-8 md:px-0">
          Here are a few things I've been building with passion and coffee.
        </p>
      </div>
      <div className="flex flex-col gap-20">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
