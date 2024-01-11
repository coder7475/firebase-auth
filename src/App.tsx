import './App.css'
import Home from './routes/Home';
import { useContext, useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom'
import Profile from './routes/Profile';
import { AuthContext } from './contexts/auth-context';

function App() {  
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

    console.log("User: ", currentUser);
  // if user exits got to profile page 
  useEffect(() => {
    if (currentUser) {
      navigate("/profile")
    }
  }, [currentUser, navigate]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="profile" element={currentUser? <Profile />: <Home/>} />
    </Routes>
  )
}

export default App
