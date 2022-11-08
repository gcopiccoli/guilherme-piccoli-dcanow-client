import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./MorePage.scss";
import { Link } from "react-router-dom";

const MorePage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e909dgf",
        "template_wo2j1o3",
        form.current,
        "exG3odJ1hEf7zHjYY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="more">
      <article className="more__container">
        <h3 className="more__title">Get in Touch</h3>
        <form ref={form} onSubmit={sendEmail} className="more__form">
          <label htmlFor="user_name" className="more__label">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="more__input"
            placeholder="Insert your name"
            required
          />
          <label htmlFor="user_email" className="more__label">
            E-mail
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="more__input"
            placeholder="Insert your email"
            required
          />
          <label htmlFor="message" className="more__label">
            Name
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="more__input"
            rows="6"
            placeholder="Insert your message"
            required
          ></textarea>
          <div className="more__button-box">
            <button className="more__button">Send</button>
          </div>
        </form>
        <h3 className="more__title">Contact</h3>
        <div className="more__info">
          <div className="more__icon-linkedin"></div>
          <a href="http://www.linkedin.com/in/guilhermepiccoli" target="_blank">
            <h3 className="more__text">linkedin.com/in/guilhermepiccoli</h3>
          </a>
        </div>
        <div className="more__info">
          <div className="more__icon-github"></div>
          <a href="http://www.github.com/gcopiccoli" target="_blank">
            <h3 className="more__text">github.com/gcopiccoli</h3>
          </a>
        </div>
      </article>
    </section>
  );
};

export default MorePage;
