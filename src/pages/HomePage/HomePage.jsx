import { UserAuth } from "../../context/AuthContext";
import "./HomePage.scss";

const HomePage = () => {
  const { user } = UserAuth();

  return (
    <section className="home">
      <article className="home__container">
        <h1 className="home__title">Welcome, {user?.displayName}</h1>
      </article>
    </section>
  );
};

export default HomePage;
