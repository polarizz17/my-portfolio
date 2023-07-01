import {
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoGit,
  BiLogoGithub,
  BiLogoHeroku,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import { SiExpress, SiPostman, SiVercel } from "react-icons/si";

const BioDataHead = {
  bio_head_tag: "Resume",
  bio_head_title: "A Summary of My Resume",

  bio_edu_sub_head: "My Education",
  bio_exp_sub_head: "My Experience",
  bio_skills_sub_head: "My Skills",
  bio_tools_sub_head: "My Tools",

  bio_btn_1_text: "Downlaod CV",
};

const BioDataEdu = [
  {
    id: 1,
    edu_course: "B.Tech in Computer Science & Engineering",
    edu_place: "CGEC / 2020 - Present",
  },
  {
    id: 2,
    edu_course: "Senior Secondary Examination, (12)",
    edu_place: "Jalpaguri Zilla School,Jalpaiguri ",
  },
  {
    id: 3,
    edu_course: "Secondary Examination, (10)",
    edu_place: "Jalpaguri Zilla School,Jalpaiguri ",
  },
];

const BioDataExp = [
  {
    id: 1,
    exp_course: "Web Developer",
    exp_place: "BusketHunt Pvt. Ltd.",
  },
  {
    id: 2,
    exp_course: "Web Developer(Freelancing)",
    exp_place: "WinnersClub",
  },
  {
    id: 3,
    exp_course: "Web Designing",
    exp_place: "Self Projects",
  },
];

const BioDataSkills = [
  {
    id: 1,
    skills_icon: <IoLogoHtml5 />,
    skills_alt: "HTML",
  },
  {
    id: 2,
    skills_icon: <BiLogoCss3 />,
    skills_alt: "CSS",
  },
  {
    id: 3,
    skills_icon: <BiLogoJavascript />,
    skills_alt: "JS",
  },
  {
    id: 4,
    skills_icon: <BiLogoReact />,
    skills_alt: "React",
  },
  {
    id: 5,
    skills_icon: <BiLogoCPlusPlus />,
    skills_alt: "C++",
  },
  {
    id: 6,
    skills_icon: <BiLogoNodejs />,
    skills_alt: "Node JS",
  },
  {
    id: 7,
    skills_icon: <SiExpress />,
    skills_alt: "Express JS",
  },
  {
    id: 8,
    skills_icon: <BiLogoTailwindCss />,
    skills_alt: "Tailwind Css",
  },
  {
    id: 9,
    skills_icon: <BiLogoMongodb />,
    skills_alt: "Mongo DB",
  },
  {
    id: 10,
    skills_icon: <BiLogoGit />,
    skills_alt: "Git",
  },
];

const BioDataTools = [
  {
    id: 1,
    tools_icon: <BiLogoVisualStudio />,
    tools_alt: "VS Code",
  },
  {
    id: 2,
    tools_icon: <BiLogoGithub />,
    tools_alt: "Git Hub",
  },
  {
    id: 3,
    tools_icon: <SiPostman />,
    tools_alt: "Postman",
  },
  {
    id: 4,
    tools_icon: <SiVercel />,
    tools_alt: "Vercel",
  },
  {
    id: 5,
    tools_icon: <BiLogoHeroku />,
    tools_alt: "Heroku",
  },
];

export { BioDataEdu, BioDataExp, BioDataHead, BioDataSkills, BioDataTools };
