import { Link, useParams } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./HomePage.scss";

const HomePage = ({ userId }) => {
  const { user } = UserAuth();

  return (
    <section className="home">
      <article className="home__container">
        <h1 className="home__title">
          Welcome,{" "}
          <span className="home__title-highlight">{user?.displayName}</span>
        </h1>
        <div className="home__feature">
          <div className="home__image-one"></div>
          <h3 className="home__copy-one">
            DCAnow allows you to stay organised and
          </h3>
        </div>
        <div className="home__feature">
          <h3 className="home__copy-two">
            on top of your high quality investments for your DCA strategy,
          </h3>
          <div className="home__image-two"></div>
        </div>
        <div className="home__feature">
          <div className="home__image-three"></div>
          <h3 className="home__copy-three">
            having a clear view of your regular investments.
          </h3>
        </div>
      </article>
      <div className="home__button-box">
        <Link to={`/${userId}/positions/all`}>
          <div className="home__button">Build your portfolio</div>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
