import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, ReactNode, useState, useEffect } from 'react';
import auth from './../firebase/firebase.ts';

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentUser: (_user:User) => {},
  logOut: () => {}
});

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

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
    navigate("/");
    return signOut(auth);
  }

  const authInfo = {
    currentUser,
    setCurrentUser,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;