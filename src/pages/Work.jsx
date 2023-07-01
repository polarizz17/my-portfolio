import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import WorkCard from "../components/WorkCard";
import "../css/Work.css";
import { WorkCardData, WorkData } from "../data/WorkData";

function Work() {
  return (
    <>
      <section id="work">
        <div className="work container">
          <Fade bottom cascade>
            <div className="work_head">
              <span>{WorkData.work_head_tag}</span>
              <h1>{WorkData.work_head_title}</h1>
            </div>
          </Fade>
          <div className="row work_exp">
            <div className="">
              <Fade>
                <div className="work_content">
                  {WorkCardData.map((val) => {
                    return (
                      <WorkCard
                        key={val.id}
                        icon={val.work_icon}
                        name={val.work_name}
                      />
                    );
                  })}
                </div>
              </Fade>
            </div>
            <div className="col-lg-4">
              <div className="exp">
                <Bounce>
                  <h4>{WorkData.work_exp}</h4>
                </Bounce>
                <RubberBand>
                  <h6>
                    Years of <span>Experience</span>
                  </h6>
                </RubberBand>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
