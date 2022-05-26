import {
  FaReact,
  FaHtml5,
  FaJs,
  FaSass,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default [
  {
    id: 0,
    title: "SerPath",
    techUsed: [<FaReact />, <FaJs />, <FaHtml5 />, <FaSass />, <FaGitAlt />],
    description:
      "My own portfolio website (this website) displaying some of the project on which I've been working and some of the techniques I've picked up over the past while.",
    githubLink: "https://github.com/mikebarr24/serpath",
    liveSite: "www.serpath.com",
    challenges:
      "The main challenge here was to create a clear design that displays my skills, portfolio and C.V. in a way that is accessable to anyone visiting the site. ",
  },
  {
    id: 1,
    title: "MisPartituras",
    description:
      "A website to display and organise information on sheet music. The organisation of the music is based on the Spanish education syllabus in Andalucia. ",
    techUsed: [
      <FaReact />,
      <FaNodeJs />,
      <SiMongodb />,
      <FaJs />,
      <FaHtml5 />,
      <FaSass />,
      <FaGitAlt />,
    ],
    githubLink: "Hello",
    challenges:
      "The most significant challenge to overcome here was to structure the data in a way that is easily accessible for the user to navigate. ",
  },
  {
    id: 2,
    title: "FisioML",
    description: "",
    techUsed: [
      <FaReact />,
      <FaNodeJs />,
      <SiMongodb />,
      <FaJs />,
      <FaHtml5 />,
      <FaSass />,
      <FaGitAlt />,
    ],
    githubLink: "Hello",
    challenges: "",
  },
];
