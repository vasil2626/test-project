import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_list_wrapper">
            <div className="nav_logo logo-footer">LOGO</div>
            <ul className="footer_list">
              <span className="listLabel">services</span>
              <li className="_list_items">Support and development</li>
              <li className="_list_items">UI/UX and product design</li>
              <li className="_list_items">
                Progressive Web Applications (PWA)
              </li>
            </ul>
            <ul className="footer_list">
              <span className="listLabel">Company</span>
              <li className="_list_items">About company</li>
              <li className="_list_items">Projects</li>
              <li className="_list_items">Contacts</li>
            </ul>
            <ul className="footer_list">
              <span className="listLabel">Contacts</span>
              <li className="_list_items">Download presentation</li>
              <li className="_list_items">+7 (499) 999-99-99</li>
              <li className="_list_items">info@site.com</li>
            </ul>
            <div className="contact_social">
              <div className="contact_tele"></div>
              <div className="contact_watsup"></div>
            </div>
          </div>
          <div className="footer_bottom_wrapper">
            <span className="coppy_right">
              © Company <span>{new Date().getFullYear()}</span>. All rights
              reserved.
            </span>
            <span className="coppy_right">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
