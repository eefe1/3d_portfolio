import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shopify,
  classroom,
  admin,
  jobsearch,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "RetinAI(Switzerland)",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2022 - April 2023",
    points: [
      "Developing and maintaining wmain product using React.js and other related technologies.",
      "Collaborating with cross-functional teams including integration team, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Converted one of the internal app in the company to Typescript and applied new design to the UI by using MUI.",
      "Helped with the integration process of Docusign, Stripe and Hubspot for one of the project.",
      "Planned and designed one of the internal project. Technologies : NextJS, Typescript and applied new design",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "RenderApp(UK)",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "September 2021 - May 2022",
    points: [
      "Node Server connected through API services with the hosting company in order to give status and details for each terminal, while also providing the functionality to turn on or off a terminal of choice. Technologies: NodeJS, Express, EJS for templating, CSS.",
      "Dashboard for the clients machines, created a server on NodeJS by calling RenderApp API and displaying all the machines by rendering their API status if the machine is on or off. Applied user authentication with passportJS for multiple users and displayed the machine list based on user types.Technologies: NodeJS, Express, EJS for templating, CSS."

    ],
  },
  {
    title: "Web Developer ",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - September 2021",
    points: [
      "Developing and maintaining web applications, landing pages using React.js, HTML, JS,CSS and other related technologies.",
    ],
  },
];


const projects = [
  {
    name: "ClassroomApp",
    description:
      "Web-based classroom application that allows instructors to add courses with lessons, while students can enroll in these courses and track their progress. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: classroom,
    source_code_link: "https://github.com/eefe1/Classie",
  },
  {
    name: "Ecommerce Admin Dasboard",
    description:
      "Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/eefe1/ecommerce-admin",
  },
  {
    name: "Job Search Mobile App",
    description:
      "React Native mobile app for job search with search & pagination functionality",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
    ],
    image: jobsearch,
    source_code_link: "https://github.com/eefe1/react-native-jobs",
  },
];

export { services, technologies, experiences, projects };
