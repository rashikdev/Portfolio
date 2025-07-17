import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
// import p1dashboard from "module";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Trips Bangladesh",
      image: project3,
      description_small:
        "Trips is a full-featured Bangladeshi tourism platform connecting tourists and guides with booking, storytelling, and admin management tools.",
      description_large:
        "Trips is a comprehensive MERN-stack tourism platform for discovering, exploring, and booking travel experiences across Bangladesh. It enables users to book tour packages with verified guides, share their travel stories, and manage bookings. The admin panel includes detailed statistics and user management features. The platform also supports Stripe payments, role-based dashboards, and responsive UI with TailwindCSS. Animations and transitions are handled with Framer Motion for a modern feel.",
      features: [
        "Tour package booking with tour guide selection",
        "Stripe payment integration",
        "Tourist stories with Facebook share",
        "Role-based dashboards (Admin, Tour Guide, Tourist)",
        "Tour guide application & assignment system",
        "Admin panel with stats and user management",
        "Responsive UI with protected routes",
      ],
      stack: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Motion",
        "React Router",
        "Firebase Auth",
        "Stripe",
      ],
      live: "https://travelbd-ea2e0.web.app/",
      github: {
        client: "https://github.com/rashikdev/travelbd-client",
        server: "https://github.com/rashikdev/travelbd-server",
      },
      challenges: [
        "Handling conditional UI and logic based on user roles",
        "Synchronizing tour guide assignment status and bookings flow",
        "Managing dynamic dashboard components and protected routes",
      ],
      improvements: [
        "Implement in-app notifications for booking updates",
        "Add reviews and ratings for guides and packages",
        "Improve accessibility and SEO for better reach",
      ],
    },
    {
      id: 2,
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
      id: 3,
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
        server: "https://github.com/rashikdev/STUDDYBOND_Server",
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
  ];

  return (
    <div className="md:pt-30 mt-20 lg:-mt-4">
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
