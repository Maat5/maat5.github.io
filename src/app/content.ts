import { ResumeData } from "./types";

const data: ResumeData = {
  header: {
    name: "Manuel Abrante",
    title: "Full-Stack Developer",
    url: "https://github.com/Maat5",
  },
  contactInfo: {
    email: "abrantemanuel@gmail.com",
    likedinUrl: "https://linkedin.com/in/manuelAbrante",
    phoneNumber: "+57 304 627 8187",
  },
  education: [
    {
      institution: "Universidad Tecnológica del Centro (UNITEC)",
      period: "2010-2013",
      degree: "Information Bachelor's Degree",
    },
    {
      institution: "Universidad Tecnológica del Centro (UNITEC)",
      period: "2013-2016",
      degree: "Information Engineering Degree",
    },
  ],
  experience: [
    {
      company: "Lumenalta",
      period: "Dec. 2020 - Current",
      position: "Lead Software Engineer",
      responsibilities: [
        "Maintain existing applications",
        "Lead multiple projects with the use of latest technologies.",
        "Contribute to improve company stack",
      ],
    },
    {
      company: "Able",
      period: "Nov. 2021- Dic. 2023",
      position: "Lead Software Engineer",
      responsibilities: [
        "Responsible for reviewing of code, ensuring adherence to coding standards, and promoting code quality and consistency",
        "Provide day-to-day solutions for the team.",
        "Lead multiple projects with the use of latest technologies.",
        "Contribute to improve company stack",
      ],
    },
    {
      company: "MiCuento",
      period: "Dec. 2019 - Oct. 2021",
      position: "Full-Stack Developer",
      responsibilities: [
        "Create a new company stack based on new technologies.",
        "Create JS/Node.js libraries for new projects.",
        "Create and deploy microservices-based solutions.",
      ],
    },
    {
      company: "Rokk3rLabs",
      period: "Oct. 2017 - Feb. 2020",
      position: "Full-Stack Developer",
      responsibilities: [
        "Create Web Apps with modern web interfaces",
        "Build realtime solutions with Firebase",
        "Construct JS/Node.js libraries for new functionalities.",
        "Contribute to improve company stack",
        "Build and deploy solutions based on microservices",
      ],
    },
    {
      company: "Biosistemika",
      period: "Jul. 2017 - Sep. 2017",
      position: "Ionic Developer",
      responsibilities: [
        "Main core development of mobile hybrid applications with Ionic 3",
      ],
    },
    {
      company: "Perdizite C.A",
      period: "Oct. 2016 - Jun. 2017",
      position: "Full-Stack Developer",
      responsibilities: [
        "Core development of an Hybrid mobile app with Ionic 2",
        "Core development of RESTful API written in Node.js",
      ],
    },
    {
      company: "Social H4ck C.A",
      period: "Dec. 2015 - Oct. 2016",
      position: "Senior Developer",
      responsibilities: [
        "Core development of Angular app.",
        "Create new modules for Angular app.",
        "Integrating 3rd party services like Facebook, Twitter and Instagram.",
        "RESTfull API written in Node.Js",
        "Config builds and tools used in app with Gulp.",
      ],
    },
  ],
  knowledgeAndTools: {
    primary: [
      { name: "HTML/CSS/JS", level: 10 },
      { name: "Node.js", level: 10 },
      { name: "Angular", level: 10 },
      { name: "MongoDb", level: 10 },
      { name: "Git/Github", level: 10 },
      { name: "Monorepos", level: 8 },
      { name: "AGILE", level: 9 },
      { name: "Microservices", level: 9 },
    ],
    secondary: [
      { name: "PostgreSQL", level: 9 },
      { name: "React.js", level: 9 },
      { name: "MySQL", level: 7 },
      { name: "Firebase", level: 7 },
      { name: "GraphQL", level: 8 },
      { name: "AWS", level: 6 },
    ],
  },
  otherSkills: [
    { name: "Express.js", level: 5 },
    { name: "Docker", level: 4 },
    { name: "Kubernetes", level: 3 },
    { name: "Next.js", level: 4 },
    { name: "Typescript", level: 5 },
    { name: "Python", level: 3 },
    { name: "Nest.js", level: 4 },
  ],
  courses: [
    {
      institution: "MongoDB, Inc.",
      year: "2016",
      course: "M101JS: MongoDB for Node.js Developers",
    },
    {
      institution: "MongoDB, Inc.",
      year: "2014",
      course: "M101P: MongoDB for Developers",
    },
    {
      institution: "Loscher Institue",
      year: "2005",
      course: "English course",
    },
  ],
  languages: [
    { language: "Spanish", level: 10 },
    { language: "English", level: 8 },
  ],
};

export default data;
