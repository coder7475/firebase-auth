
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth-context';

const Profile = () => {
  const { 
    currentUser,
    logOut
  } = useContext(AuthContext);

  return (
    <div>
        <h3>Welcome! {currentUser?.email}</h3>
        <p>Sign In Status: {currentUser && 'active'}</p>
        <button onClick={logOut}>Sign Out</button>
    </div>
  );
};

export default Profile;