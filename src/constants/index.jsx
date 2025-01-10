// Importing project images for the portfolio projects
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

// Importing Remix Icons for representing different technologies and tools
import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";

import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

/* -------------------- Navigation Links -------------------- */
// Links used in the navbar for smooth navigation across sections
export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* -------------------- Profile Section -------------------- */
// Personal information for the Hero section of the website
export const PROFILE = {
  name: "David Stones",
  role: "Full Stack Developer",
  subheading:
    "With 10 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

/* -------------------- Projects Section -------------------- */
// List of projects to showcase in the portfolio
export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["React", "Node.js", "Express", "MongoDB"], // Technologies used
    imgSrc: project1,  // Image representing the project
    link: "https://example-ecommerce.com",  // Project live link
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
  },
];

/* -------------------- Skills Section -------------------- */
// Icons and names of technologies used for the skills section
export const SKILLS = [
  { name: "HTML5", icon: <RiHtml5Line className="text-orange-600" /> },
  { name: "CSS3", icon: <RiCss3Line className="text-blue-500" /> },
  { name: "JavaScript", icon: <RiJavascriptLine className="text-yellow-500" /> },
  { name: "React", icon: <RiReactjsLine className="text-blue-400" /> },
  { name: "Node.js", icon: <RiNodeTree className="text-green-500" /> },
  { name: "MongoDB", icon: <RiDatabaseLine className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <RiCodeSSlashLine className="text-teal-400" /> },
  { name: "GraphQL", icon: <RiGitBranchLine className="text-pink-400" /> },
];

/* -------------------- Work Experience Section -------------------- */
// Timeline of professional work experiences
export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    yearRange: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description:
      "Developed RESTful APIs and collaborated with teams to deliver scalable products.",
    techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    yearRange: "2020 - 2021",
    role: "Software Engineer",
    company: "PayPal",
    description:
      "Managed MongoDB databases and prioritized features with product managers.",
    techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  },
];

/* -------------------- Education Section -------------------- */
// Educational qualifications
export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Stanford University",
    duration: "2012 - 2016",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms and data structures.",
  },
  {
    id: 2,
    degree: "Master of Science in Software Engineering",
    institution: "MIT",
    duration: "2016 - 2018",
    description:
      "Focused on advanced system design and AI technologies.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2019",
    description:
      "Certified in advanced React.js development.",
  },
];

/* -------------------- Testimonial Section -------------------- */
// Testimonial from a client or colleague
export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease.",
  image: personImage,
};
