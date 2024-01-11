import { User, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, ReactNode, useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import auth from "./../firebase/firebase.ts";

interface Props {
  children?: ReactNode;
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentUser: (_user: User) => {},
  logOut: () => {},
});

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [count, setCount] = useState(0);

  // const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return unsubscribe;
  }, [currentUser]);

  // create logOut
  const logOut = () => {
    setCurrentUser(null);
    // navigate("/");
    return signOut(auth);
  };

  export const signInUser = async (
    email: string, 
    password: string
  ) => {
    if (!email && !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    currentUser,
    setCurrentUser,
    logOut,
    count,
    setCount,
    signInUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
