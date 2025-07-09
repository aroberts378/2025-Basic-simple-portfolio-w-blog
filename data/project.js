// /data/project.js
import projects from "../../data/project";

const projects = [
  {
    slug: "job-board-app",
    title: "Job Board App",
    description: "A full-stack job board app with filters, authentication, and real-time updates.",
    coverImage: "/images/job-board-cover.jpg", // for your hero/header
    screenshots: [
      "/images/job-board-1.png",
      "/images/job-board-2.png"
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    status: ["Open Source", "Featured"], // badges
    liveUrl: "https://your-demo-link.com",
    repoUrl: "https://github.com/yourusername/job-board-app"
  },
  {
    slug: "portfolio-site",
    title: "Personal Portfolio",
    description: "A responsive portfolio site to showcase my projects and skills.",
    coverImage: "/images/portfolio-cover.jpg",
    screenshots: [
      "/images/portfolio-1.png",
      "/images/portfolio-2.png"
    ],
    tech: ["Next.js", "Tailwind CSS"],
    status: ["Personal"],
    liveUrl: "https://your-portfolio-link.com",
    repoUrl: "https://github.com/yourusername/portfolio-site"
  }
  // Add more projects as needed!
];

export default projects;

