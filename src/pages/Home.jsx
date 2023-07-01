import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import animationData from "../assets/lottie/home.json";
import "../css/Home.css";
import HomeData from "../data/HomeData";

function Home() {
  return (
    <>
      <section id="home">
        <div className="home container">
          <div className="row">
            <Fade left cascade>
              <div className="col-lg-7 biodata">
                <h1>{HomeData.tag_line_1}</h1>
                <h2>{HomeData.tag_line_2}</h2>
                <h3>
                  <span>{HomeData.tag_line_3}</span>
                  <Typewriter
                    options={{
                      strings: [" Problem Solver", " Designer", " Creator"],
                      autoStart: true,
                      loop: true,
                      cursor: "",
                      wrapperClassName: ``,
                    }}
                  />
                </h3>
                <p>{HomeData.location}</p>
                <div></div>
                <span>
                  <Link
                    to="projects"
                    smooth={true}
                    offset={-50}
                    duration={100}
                    className="btn"
                  >
                    {HomeData.btn_1}
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={100}
                    className="btn"
                  >
                    {HomeData.btn_2}
                  </Link>
                </span>
              </div>
            </Fade>

            <Fade right>
              <div className="col-lg-5 bioimg">
                <Player autoplay loop src={animationData}>
                  <Controls buttons={["play", "repeat", "frame", "debug"]} />
                </Player>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
