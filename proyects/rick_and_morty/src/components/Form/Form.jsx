import { useState } from "react";
import validation from "../validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form>
      <img
        src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/YHAUBUYW75FZVLG4Z4WL5S6LMY.jpg"
        alt="rick-and-morty"
        width="480px"
        height="320px"
      />
      <br />
      <label>Email: </label>
      <input
        onChange={handleChange}
        value={userData.email}
        type="text"
        name="email"
      />
      {errors.e1 ? (
        <p>{errors.e1}</p>
      ) : errors.e2 ? (
        <p>{errors.e2}</p>
      ) : (
        <p>{errors.e3}</p>
      )}
      <br />
      <label>Password: </label>
      <input
        onChange={handleChange}
        value={userData.password}
        type="text"
        name="password"
      />
      {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
      <br />
      <button onClick={handleSubmit} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
