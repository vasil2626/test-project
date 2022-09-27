import { Link } from "react-router-dom";
import Form from "../contactssForm";
import "./style.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts_wrapper">
          <div className="contacts_content">
            <span className="contacts_to">
              main-<strong>contacts</strong>
            </span>
            <h1 className="contacts_main_title">we are close</h1>
            <p className="contacts_main_description">
              Fill out the form below and we will
              <br />
              contact you. Don't like shapes? Write to us at{"  "}
              <Link to={"mailto:info@site.com"} className="contacts_main_mail">
                info@site.com
              </Link>
            </p>
            <Form />
          </div>
          <div className="gradient_box">
            <div className="gradient_button">
              <div className="button_image"></div>
              <span className="button_text">send</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
