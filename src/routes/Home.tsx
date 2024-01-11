import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import "../App.css";
import reactLogo from "../assets/react.svg";
import { AuthContext } from '../contexts/auth-context';

const defaultFormFields = {
  email: "",
  password: "",
};


const Home = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { signInUser } = useContext(AuthContext);
  // const navigate = useNavigate();
  // console.log(formFields);
  // const resetFormFields = () => {
  //   return setFormFields(defaultFormFields);
  // };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // Send the email and password to firebase
      const userCredential = await signInUser(email, password);

      if (userCredential) {
        resetFormFields()
        navigate('/profile')
      }
    } catch (error) {
      console.log('User Sign In Failed', error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value})
  }

  return (
    <div>
      <div className="card">
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input id="recaptcha" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
