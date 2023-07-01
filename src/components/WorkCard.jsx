import Fade from "react-reveal/Fade";

function WorkCard({ icon, name }) {
  return (
    <>
      <Fade bottom>
        <div className="work_card col-sm-6 col-lg-4">
          <span>{icon}</span>
          <h2>{name}</h2>
        </div>
      </Fade>
    </>
  );
}

export default WorkCard;
