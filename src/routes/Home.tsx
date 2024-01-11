import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../App.css";
import reactLogo from "../assets/react.svg";

const defaultFormFields = {
  email: "",
  password: "",
};


const Home = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const navigate = useNavigate();
  console.log(formFields);
  // const resetFormFields = () => {
  //   return setFormFields(defaultFormFields);
  // };

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
        <form >
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
