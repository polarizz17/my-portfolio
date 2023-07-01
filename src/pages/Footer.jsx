import { FaHeart } from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="footer">
          <h4>
            Developed with
            <i>
              <FaHeart />
            </i>
            by
            <a href="https://github.com/polarizz17">Polarizz17</a>
          </h4>
        </div>
      </section>
    </>
  );
}

export default Footer;
