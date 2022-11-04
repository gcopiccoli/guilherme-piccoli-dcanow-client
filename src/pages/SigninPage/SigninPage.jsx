import { UserAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate;

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, []);

  return (
    <section className="auth">
      <h1 className="auth__title">Signin</h1>
      <div className="auth__button">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </section>
  );
};

export default SigninPage;
