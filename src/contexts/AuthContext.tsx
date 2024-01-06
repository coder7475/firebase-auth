import { User } from 'firebase/auth';
import { createContext, useState, useEffect, ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  setCurrentUser: (_user:User) => {},
  signOut: () => {}
});

const AuthProvider = ({ children }: Props) => {
  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;