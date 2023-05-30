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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  c,
  cpp,
  python,
  java,
  intellij,
  pycharm,
  github,
  gcp,
  bigquery,
  googlecloud,
  socialconnect,
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
    title: "Data Science",
    icon: web,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "Big Data",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "intellij",
    icon: intellij,
  },
  {
    name: "pycharm",
    icon: pycharm,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "github",
    icon: gcp,
  },
  {
    name: "bigquery",
    icon: bigquery,
  },
  {
    name: "googlecloud",
    icon: googlecloud,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Instagram",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "OutPass",
    description:
      "Android app that will generate digital outpasses for hostellers who need to leave their hostels for various reasons such as going home, medical emergencies, etc. The main objective of the app is to provide a hassle-free and paperless way for hostellers to generate a valid outpass without the need for physical paperwork or manual approvals.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "xml",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shazinabbas/OutPass",
  },
  {
    name: "SocialConnect",
    description:
      "SocialConnect is an innovative Figma design that envisions a mobile app aimed at connecting users with similar interests, fostering engaging discussions, and facilitating valuable networking opportunities. The design showcases a sleek and intuitive user interface, designed to provide a seamless experience for users to explore, connect, and interact with like-minded individuals.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "UX",
        color: "pink-text-gradient",
      },
    ],
    image: socialconnect,
    source_code_link: "https://www.figma.com/file/SiB1mvoA3reZwABHblJeRY/SocialConnect?type=design&node-id=12%3A1335&t=V8FHGbVfqIZaGEFc-1",
  },
  {
    name: "Quizzit",
    description:
      "QUIZZIT is Graphical User Interface(GUI) quiz application using the Tkinter and firebase as realtime database in python. The major goal of this project is to create and join quizzes with ease which makes it fun and interactive. Quizzes can be made regardless of the number of questions with time restriction as a choice.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shazinabbas/QuizzIt",
  },
  {
    name: "SES",
    description:
      "A management system which can be used in the schools and colleges for registering and managing the details during sports fest. It allows users to register and manage participant details, event schedules, rules, and results. It helps organize and manage sports fests efficiently and effectively.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "CSV",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
