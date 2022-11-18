import "./SigninPage.scss";
import { UserAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <section className="auth">
      <h1 className="auth__title">Sign in</h1>
      <div className="auth__button">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </section>
  );
};

export default SigninPage;
