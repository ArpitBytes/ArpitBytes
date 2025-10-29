// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
// import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import Java from "./assets/techstack/Java.png";
import Ejs from "./assets/techstack/Ejs.png";
import Nodejs from "./assets/techstack/Nodejs.png";
import express from "./assets/techstack/express.png";
import mongoDB from "./assets/techstack/mongoDB.png";

// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Arpit Gupta",
  tagline: "Turning ideas into scalable web solutions.",
  img: profile,
  about: `I'm Arpit, Full Stack Developer with a strong foundation in building dynamic, responsive, and scalable web applications. I specialize in JavaScript-based technologies, particularly the MERN stack (MongoDB, Express.js, React.js, Node.js), and have hands-on experience designing, developing, and deploying full-cycle web solutions.

My expertise spans both frontend and backend development, enabling me to create seamless integrations between user interfaces and server-side logic focusing on writing clean, efficient, and maintainable code while following best practices and modern development standards.

I’m also passionate about learning emerging technologies such as Artificial Intelligence, Machine Learning, and Cloud Computing, aiming to integrate intelligent features and scalable architectures into future projects.

I thrive in collaborative environments, value problem-solving, and enjoy transforming complex ideas into impactful digital products that deliver real-world results.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/arpit-gupta2312",
  github: "https://github.com/ArpitBytes",
  twitter: "https://leetcode.com/u/ArpitBytes/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Joules Ecotech`,
    Location: "Jaipur",
    Type: "Internship",
    Duration: "July 2024 - August 2024",
  },
  {
    Position: "Computer science Intern",
    Company: `Kalisindh Thermal Power Plant (KTPP)`,
    Location: "Jhalawar",
    Type: "Internship",
    Duration: "Nov 2023 - Jan 2024",
  },
 
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Technology in Computer Science",
    Company: "Institute of Engineering and Technology, MLSU (Udaipur)",
    Location: "Udaipur (Rajasthan)",
    Type: "7.92 CGPA",
    Duration: "2021 - 2025",
  },
  {
    Position: "Higher Secondary Education (12th)",
    Company: `Govt. sn. Sec. School (Jhalarapatan)`,
    Location: "Jhalarapatan (Rajasthan)",
    Type: "95.80%",
    Duration: "2020 - 2021",
  },
  {
    Position: "Secondary Education (10th)",
    Company: `Emmanuel Mission Sr. Sec. School (Jhalawar)`,
    Location: "Jhalawar (Rajasthan)",
    Type: "89.40%",
    Duration: "2017 - 2018",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  Ejs: Ejs,
  Nodejs: Nodejs,
  express: express,
  mongoDB: mongoDB,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  Java: Java,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "My CareLabs International",
    image: projectImage1,
    description: `Developed a responsive and animated UI using React libraries, improving session duration by 20% and performance by 30% through optimized state management (Hooks, Context API). Built reusable components that reduced development time by 40%.`,
    techstack: "React.js, JavaScript (ES6+), HTML5, CSS3, Context API, Git, REST APIs",
    githubLink: "https://github.com/Harshkhosla/Mycarelabs_frontend",
    previewLink: "https://mycarelabs.com/",
  },
  {
    title: "Companio - A Travel Companion Finder",
    image: projectImage2,
    description: `Companio is a full-stack web application designed to connect travelers with compatible travel partners based on preferences, location, and itinerary. The platform focuses on improving user experience through secure authentication, personalized dashboards, and fast performance.`,
    techstack: "React.js, Node.js, Express.js, MongoDB, JWT Authentication, CSS3",
    githubLink: "https://github.com/chirayumishra24/companio",
  },
  {
    title: "DreamForge - AI-Powered Construction Management Platform",
    image: projectImage3,
    description: `DreamForge is an intelligent, full-stack MERN web application designed to revolutionize the construction and real-estate ecosystem. It empowers landowners, architects, engineers, and administrators to collaborate, plan, and execute projects seamlessly — all through an AI-driven digital platform`,
    techstack: "HTML/CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Open AI Integration, MongoDB",
    githubLink: "https://github.com",
    previewLink: ""

  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "guptaarpit2312@gmail.com",
  phone: "+91 7742034222",
};
