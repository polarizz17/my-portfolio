import { BsPersonCircle } from "react-icons/bs";
import { IoGameController, IoTelescope } from "react-icons/io5";
import { SiBitcoin } from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";

const ProjectsData = {
  projects_head_tag: "Portfolio",
  projects_head_title: "Some of my cool projects",
};

const ProjectsCardData = [
  {
    id: 1,
    project_img: "Images/web1.png",
    project_alt: "Web 1",
    project_icon: <TiWeatherCloudy />,
    project_title: "Weather App",
    project_link: "https://weather-app-polarizz17.vercel.app/",
    project_bg: "info info_light",
  },
  {
    id: 2,
    project_img: "Images/web2.png",
    project_alt: "Web 2",
    project_icon: <BsPersonCircle />,
    project_title: "Winner's Club",
    project_link: "https://winners-club.vercel.app/",
    project_bg: "info info_light",
  },
  {
    id: 3,
    project_img: "Images/web3.png",
    project_alt: "Web 3",
    project_icon: <IoTelescope />,
    project_title: "Portfolio",
    project_link: "https://portfolio-polarizz17.vercel.app/",
    project_bg: "info info_light",
  },
  {
    id: 4,
    project_img: "Images/web4.png",
    project_alt: "Web 4",
    project_icon: <IoGameController />,
    project_title: "4 Sinisters",
    project_link: "https://4-sinisters-officials.vercel.app/",
    project_bg: "info info_light",
  },
  {
    id: 5,
    project_img: "Images/web5.png",
    project_alt: "Web 5",
    project_icon: <SiBitcoin />,
    project_title: "CoinX",
    project_link: "https://coinx-polarizz17.vercel.app/",
    project_bg: "info info_light",
  },
];

export { ProjectsCardData, ProjectsData };
