import {
logo,
backend,
creator,
mobile,
web,
github1,
menu,
close,
css,
figma,
git,
html,
javascript,
reactjs,
tailwind,
threejs,
c,
cpp,
python,
java,
intellij,
pycharm,
github,
googlecloud,
carrent,
jobit,
tripguide,
socialconnect,
uber
teachnook,
agumentik
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
    title: "Google Cloud",
    icon: creator,
  },
];

const technologies = [
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
    name: "googlecloud",
    icon: googlecloud,
  },
  
  
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
 
];


const projects = [

  {
    name: "Uber Data Analytics",
  description:
    "SocialConnect is an innovative Figma design that envisions a mobile app aimed at connecting users with similar interests, fostering engaging discussions, and facilitating valuable networking opportunities. The design showcases a sleek and intuitive user interface, designed to provide a seamless experience for users to explore, connect, and interact with like-minded individuals.",
  tags: [
    {
      name: "Python",
      color: "blue-text-gradient",
    },
    {
      name: "Google Cloud",
      color: "green-text-gradient",
    },
    {
      name: "MAGE-AI",
      color: "pink-text-gradient",
    },
  ],
  image: uber,
  source_code_link: "https://www.figma.com/file/SiB1mvoA3reZwABHblJeRY/SocialConnect?type=design&node-id=12%3A1335&t=V8FHGbVfqIZaGEFc-1",
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
    fig: true,
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
    image: jobit,
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
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];


const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Teachnook",
    icon: teachnook,
    iconBg: "#ffffff",
    date: "July 2022 - Aug 2022",
    points: [
      "Developing and maintaining data science projects using Python and other related technologies.",
      "Working on real-world data science projects during internships to gain hands-on experience in the field.",
      "Implementing data processing and analysis techniques to extract insights from large datasets.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI/UX Developer Intern",
    company_name: "Agumentik Group of Companies",
    icon: agumentik,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Design intuitive and visually appealing applications and website themes that align with brand guidelines.",
      "Collaborate with development teams to ennsure seamless implementation of designs.",
      "Conduct user research and usability testing to gather feedback and iterate on design solutions.",
      "Optimize designs for responsiveness anq accessibility across different devices and platforms.",
    ],
  },
];
export { services, technologies, projects, experiences };
