import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { getUserByEmail, registerNewUser } from "../utilities/api";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    // .then((result) => {
    //   const displayName = result.user.displayName;
    //   const email = result.user.email;
    //   const photoURL = result.user.photoURL;

    //   console.log("hello!");
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        getUserByEmail(currentUser.email).then((response) => {
          if (!response.data) {
            // if not, add them
            console.log(currentUser);

            const newUser = { ...currentUser, auth_type: "google" };
            registerNewUser(newUser).then(() => {
              setUser(currentUser);
              console.log(currentUser);
            });
          }
        });
      }
      setUser(currentUser);
      console.log(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
