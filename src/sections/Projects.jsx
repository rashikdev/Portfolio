import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HobbyHub",
      image: project2,
      description_small:
        "HobbyHub is a creative community platform where users can share, join, and explore hobby groups with seamless user experience.",
      description_large:
        "HobbyHub is a full-stack web application built for hobby enthusiasts to discover, join, and create interest-based communities. It features user authentication, real-time group interactions, and visually engaging UI with dark mode and scroll animations. Admins can manage categories and groups, while users can filter, explore, and join based on interest. The app leverages modern animations using Framer Motion and smooth scroll snapping for a polished UX.",
      features: [
        "User dashboards",
        "Group/category management",
        "Responsive dark & light mode UI",
        "Dynamic filtering & search",
        "MongoDB CRUD & RESTful APIs",
      ],
      stack: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Motion",
      ],
      live: "https://hobby-hub-a8201.web.app/",
      github: {
        client: "https://github.com/rashikdev/HobbyHub",
        server: "https://github.com/rashikdev/hobbyhub-server",
      },
      challenges: [
        "Creating a seamless scroll-snapping experience across browsers",
        "Managing dynamic filters and maintaining UX consistency in group/category views",
      ],
      improvements: [
        "Implement user-to-user messaging inside groups",
        "Add real-time notifications for group activity",
      ],
    },
    {
      id: 2,
      title: "STUDY BOND",
      image: project1,
      description_small:
        "StudyBond is a group study platform where users can create groups, assign tasks, submit work, and manage learning collaboratively.",
      description_large:
        "StudyBond is a MERN stack-based platform designed for group-based learning. Users can create and join study groups, assign and submit assignments, track grading, and manage submissions. It includes secure JWT authentication, responsive dashboard UI, dynamic role-based access, and admin controls. The platform also features payment integration and parcel tracking functionality.",
      features: [
        "Group creation & joining",
        "Assignment management",
        "JWT-based authentication",
        "Responsive dashboard",
      ],
      stack: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "JWT"],
      live: "https://study-bond-bd1de.web.app/",
      github: {
        client: "https://github.com/rashikdev/StudyBond",
        server: "",
      },
      challenges: [
        "Managing role-based access control and conditionally rendering components",
        "Implementing real-time updates for submitted assignments and parcel status",
      ],
      improvements: [
        "Integrate live group chat with Socket.io",
        "Add calendar-based assignment deadlines and reminders",
      ],
    },
    {
      id: 3,
      title: "App Store",
      image: project3,
      description_small:
        "A curated frontend app showcase where users can explore and rate different projects without needing to download or install anything.",
      description_large:
        "App Store is a frontend app rating platform where users can browse through a collection of frontend applications, view details, and rate them based on their experience. The project emphasizes clean UI, dynamic routing, user feedback through rating systems, and seamless navigation. No downloads or installations are required—it's all about exploring ideas and giving feedback. Ideal for showcasing frontend-only projects.",
      features: [
        "Frontend app preview",
        "Rating system with user feedback",
        "App detail pages",
        "Smooth navigation & UX",
        "Fully responsive layout",
        "User login & authentication",
      ],
      stack: ["React", "TailwindCSS", "DaisyUI"],
      live: "https://app-store-cb5da.web.app/",
      github: {
        client: "https://github.com/rashikdev/App-Store",
        server: "",
      },
      challenges: [
        "Handling rating state per user without a full backend",
        "Ensuring unique ratings per app per user and preventing spam refresh",
      ],
      improvements: [
        "Add filter & sort by rating or category",
        "Integrate backend for persistent user ratings and review comments",
      ],
    },
  ];

  return (
    <div className="md:mt-30 mt-20 lg:-mt-4">
      <div className="md:text-left text-center md:ml-14 mb-20 lg:-ml-0">
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
