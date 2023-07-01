import { BioSkillsIcons, BioToolsIcons } from "../components/BioDataCard";
import Timeline from "../components/Timeline";
import "../css/Biodata.css";
import { BioDataHead, BioDataSkills, BioDataTools } from "../data/BioData";

function Biodata() {
  return (
    <>
      <section id="biodata">
        <div className="biodata container">
          <div className="biodata_head">
            <span>{BioDataHead.bio_head_tag}</span>
            <h1>{BioDataHead.bio_head_title}</h1>
          </div>

          <div className="biodata_timeline row">
            <Timeline />
          </div>

          <div className="biodata_skills">
            <h2>{BioDataHead.bio_skills_sub_head}</h2>
            <div className="skills_wrapper">
              {BioDataSkills.map((val) => {
                return (
                  <BioSkillsIcons
                    key={val.id}
                    icon={val.skills_icon}
                    alt={val.skills_alt}
                  />
                );
              })}
            </div>
          </div>
          <div className="biodata_tools">
            <h2>{BioDataHead.bio_tools_sub_head}</h2>
            <div className="tools_wrapper">
              {BioDataTools.map((val) => {
                return (
                  <BioToolsIcons
                    key={val.id}
                    icon={val.tools_icon}
                    alt={val.tools_alt}
                  />
                );
              })}
            </div>
            <a href="assets/Resume.pdf" download>
              <button className="btn">{BioDataHead.bio_btn_1_text}</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Biodata;
