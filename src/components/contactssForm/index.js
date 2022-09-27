import "./style.scss";

const Form = () => {
  return (
    <div className="form_wrapper">
      <form className="form">
        <input className="form_input" type="text" placeholder="your name" />
        <input className="form_input" type="email" placeholder="your email" />
        <input
          className="form_input"
          type="text"
          placeholder="enter your comment"
        />
      </form>
      <span className="form_check_area">
        <input type="radio" className="__radio" />
        <span className="form_privacy">
          I agree with the{" "}
          <span className="_privacy_link"> Privacy Policy</span>
        </span>
      </span>
    </div>
  );
};

export default Form;
