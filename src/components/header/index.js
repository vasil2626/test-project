import "./style.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSmall, setIsSamll] = useState(false);

  const handleResize = (event) => {
    const { innerWidth } = event.target;

    if (innerWidth <= 815) {
      setIsSamll(true);
    } else {
      setIsSamll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className="nav">
      <div className="nav_wrapper">
        <div className="nav_logo">LOGO</div>
        <ul className={!isSmall ? "nav_links" : "burger"}>
          <li className="nav_link_list">
            <NavLink to="/products" className="unselected">
              products
            </NavLink>
          </li>
          <li className="nav_link_list">
            <NavLink to="/about_us" className="unselected">
              about us
            </NavLink>
          </li>
          <li className="nav_link_list">
            <NavLink to="/conacts" className="unselected">
              conacts
            </NavLink>
          </li>
        </ul>
        <div className="nav_end_wrapper">
          <div className="nav_lang_wrapper">
            <ul className="nav_lang">
              <li className="lang">
                <NavLink to="/en" className="unselected">
                  en
                </NavLink>
              </li>
              <li className="lang">
                <NavLink to="/ru" className="unselected">
                  ru
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_go_project">
            <span className="go_to_text">
              <NavLink to="/project" className="go_to_text">
                go project
              </NavLink>
            </span>
            <span className="go_to_image"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
