import "../css/Hire.css";
import HireData from "../data/HireData";

function Hire() {
  const hireBg = {
    backgroundImage: "url(assets/hire_bg.jpg)",
  };

  return (
    <>
      <section id="hire" style={hireBg}>
        <div className="hire">
          <h2>{HireData.Hire_head}</h2>
          <a href={`mailto:${HireData.mailid}`}>
            <button className="btn">{HireData.Hire_btn}</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hire;
