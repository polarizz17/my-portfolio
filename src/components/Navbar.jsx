import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";
import { NavLinkData, NavSocialData } from "../data/NavData";

function Navbar() {
  const [isActive, setisActive] = useState(false);
  const [isScroll, setisScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setisScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <header className={isScroll ? "scrolled" : ""}>
        <a href="/">
          <img src="./assets/logo.png" alt="React Logo" />
          <h2>Arka</h2>
        </a>

        <div
          className={isActive ? "menu_btn active" : "menu_btn"}
          onClick={() => {
            setisActive(!isActive);
          }}
        >
          <span className="box box-1"></span>
          <span className="box box-2"></span>
          <span className="box box-3"></span>
          <span className="box box-4"></span>
          <span className="cross cross-1"></span>
          <span className="cross cross-2"></span>
        </div>

        <nav className={isActive ? "active" : ""}>
          <div className="nav_menu">
            {NavLinkData.map((val) => {
              return (
                <Link
                  key={val.id}
                  to={val.to}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className="btn"
                  activeClass="active"
                  onClick={() => {
                    setisActive(!isActive);
                  }}
                >
                  {val.name}
                </Link>
              );
            })}
          </div>

          <div className="social_link">
            {NavSocialData.map((val) => {
              return (
                <a key={val.id} href={val.social_link} className="btn">
                  {val.social_icon}
                </a>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
