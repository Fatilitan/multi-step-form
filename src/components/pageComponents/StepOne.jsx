import React, { useState, useEffect } from "react";
import "../../styles/main.scss";
import validateInfo from "../../functions/validateInfo";

export const StepOne = ({ clickFn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const previousValues = JSON.parse(localStorage.getItem("stepOneValues"));
    if (previousValues) {
      setName(previousValues.name);
      setEmail(previousValues.email);
      setPhone(previousValues.phone);
    }

    localStorage.removeItem("stepOneValues");
  }, []);

  let isValid;

  const clickHandler = () => {
    isValid = validateInfo(name, email, phone);
    if (Object.values(isValid).every((value) => value)) {
      localStorage.setItem(
        "stepOneValues",
        JSON.stringify({ name, email, phone })
      );
      clickFn(1);
    } else {
      setErrors(isValid);
    }
  };

  return (
    <>
      <div className="contentBox">
        <h1>Personal Info</h1>
        <p>Please provide your name, email adress and phone number.</p>
        <form>
          <label for="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name === false ? "invalid" : ""}
          />
          <br />
          <label for="email">E-mail</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email === false ? "invalid" : ""}
          />
          <br />
          <label for="phone">Phone</label>
          <br />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. 0612345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone === false ? "invalid" : ""}
          />
          <br />
        </form>
      </div>
      <div className="buttonContainer" id="onlyForward">
        <button className="forward" onClick={clickHandler}>
          Next Step
        </button>
      </div>
    </>
  );
};
