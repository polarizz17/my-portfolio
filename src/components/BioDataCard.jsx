import Bounce from "react-reveal/Bounce";

function BioDataCard(props) {
  return (
    <>
      <div className="bio_card">
        <h4>{props.course}</h4>
        <span>{props.place}</span>
        <p>{props.desc}</p>
        <hr />
      </div>
    </>
  );
}

function BioSkillsIcons(props) {
  return (
    <>
      <div className="skill">
        <span>
          <Bounce>{props.icon}</Bounce>
        </span>
      </div>
    </>
  );
}

function BioToolsIcons(props) {
  return (
    <>
      <div className="tool">
        <span>
          <Bounce>{props.icon}</Bounce>
        </span>
      </div>
    </>
  );
}

export { BioDataCard, BioSkillsIcons, BioToolsIcons };
