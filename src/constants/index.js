import { fs, haighs, freelance, ga } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Customer Service Representative",
    company_name: "Haigh's Chocolates",
    icon: haighs,
    iconBg: "#accbe1",
    date: "March 2020 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Immersive",
    company_name: "General Assembly",
    icon: ga,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Completed a full stack web development course, implementing modern technologies such as Node.Js, React, CSS, HTML, Express and SQL Databases",
      "Engaged in over 500 hours of coding, proactive problem solving, refactoring my (and others) code as well as pair programming",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title:
      "Frontend Developer Virtual Internship                                                                                                     ",
    company_name: "Frontend Simplified",
    icon: fs,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Transformed a static HTML, CSS JavaScript and React single page application into an interactive user interface using animations, transitions, and carousels.",
      "Processed API requests with Axios to represent data from a cloud server and represented it through skeleton loading states, pagination, and dynamic routing.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#a2d2ff",
    date: "Jan 2022 - Present",
    points: [
      "Delivered professional websites using HTML5, CSS3 (+ SCSS, BEM), JavaScript and React best practises",
      "Engineered scalable, responsive, multi-platform and SEO friendly websites for multiple clients using HTML5, CSS3 + BEM, JavaScript ES6+ and React best practises",
      "Included SEO, responsive, multi-platform and hosting support, enabling their website to be used by any browser or device in the world.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Zoomify: Video Calling App",
    description:
      "Zoomify is a web application designed for managing meetings and calls, powered by Next.js and integrated with the Clerk authentication service. Users can effortlessly schedule, join, and view meetings, as well as access recordings with ease.",
    link: "zoomify-dun.vercel.app/",
    github: "https://github.com/JustinOngy/zoomify",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Twitter Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Twitter," enabling users to post and engage in twitter conversations.',
    link: "twitter-clone-one-mauve.vercel.app",
    github: "https://github.com/JustinOngy/twitter-clone",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://car-hire-eta.vercel.app/",
    github: "https://github.com/JustinOngy/car-hire",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Blackjack Game",
    description:
      "Blackjack game, designed to provide an immersive and engaging experience right in your browser. This project is built using a combination of HTML, CSS, and JavaScript, with a primary focus on DOM manipulation for an interactive playthrough.",
    link: "justinongy.github.io/Project-1-blackjack/",
    github: "https://github.com/JustinOngy/Project-1-blackjack",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "GPT-3 ",
    description:
      "Project GPT-3 Frontend Design. This project focuses on creating a visually appealing and interactive frontend using CSS and JavaScript to implement various tricks such as type animations, mouse movement effects, and more.",
    link: "https://gpt-3-6s9bujmi0-justinongy.vercel.app/",
    github: "https://github.com/JustinOngy/gpt-3",
  },
];
