import { FaPaintBrush } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { MdDesktopWindows } from "react-icons/md";

const WorkData = {
  work_head_tag: "What I Do?",
  work_head_title: "How I can help your next project",
  work_exp: 2,
};

const WorkCardData = [
  {
    id: 1,
    work_icon: <MdDesktopWindows />,
    work_name: "Web Development",
  },
  {
    id: 2,
    work_icon: <GrReactjs />,
    work_name: "Front end Development",
  },
  {
    id: 3,
    work_icon: <FaPaintBrush />,
    work_name: "Web Design",
  },
];

export { WorkCardData, WorkData };
