import { User } from 'firebase/auth';
import { createContext, ReactNode, useState, useEffect } from 'react';
import auth from './../firebase/firebase.ts';

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentUser: (_user:User) => {},
  signOut: () => {}
});

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
      
    });

    return unsubscribe;
  }, [currentUser])

  const authInfo = {
    currentUser,
    setCurrentUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;