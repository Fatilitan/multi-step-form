import React, { useEffect } from "react";
import "../../styles/main.scss";
import { useState } from "react";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";

export const StepTwo = ({ clickFn }) => {
  const [paymentPlan, setPaymentPlan] = useState(() => {
    const previousValues = JSON.parse(localStorage.getItem("stepTwoValues"));
    return previousValues ? previousValues.paymentPlan : "monthly";
  });
  const [isSelected, setIsSelected] = useState(() => {
    const previousValues = JSON.parse(localStorage.getItem("stepTwoValues"));
    return previousValues ? true : false;
  });
  const [paymentValue, setPaymentValue] = useState(() => {
    const previousValues = JSON.parse(localStorage.getItem("stepTwoValues"));
    return previousValues ? previousValues.paymentValue : 0;
  });
  const [paymentName, setPaymentName] = useState("");

  useEffect(() => {
    const previousValues = JSON.parse(localStorage.getItem("stepTwoValues"));
    if (previousValues) {
      setPaymentPlan(previousValues.paymentPlan);
      setPaymentValue(previousValues.paymentValue);
    }

    localStorage.removeItem("stepTwoValues");
  }, []);

  console.log(paymentValue);

  const changeHandler = (event) => {
    if (event.target.value === "monthly") {
      setPaymentPlan("yearly");
      if (paymentValue != 0) {
        if (paymentValue === 9) {
          setPaymentValue(90);
        }
        if (paymentValue === 11) {
          setPaymentValue(110);
        }
        if (paymentValue === 13) {
          setPaymentValue(130);
        }
      }
    } else {
      setPaymentPlan("monthly");
      if (paymentValue != 0) {
        if (paymentValue === 90) {
          setPaymentValue(9);
        }
        if (paymentValue === 110) {
          setPaymentValue(11);
        }
        if (paymentValue === 130) {
          setPaymentValue(13);
        }
      }
    }
  };

  const paymentPlanHandler = (event) => {
    setIsSelected(true);
    setPaymentValue(Number(event.target.value));
    setPaymentName(event.target.id);
  };

  const clickHandler = (e) => {
    console.log(e.target.value);
    if (isSelected) {
      localStorage.setItem(
        "stepTwoValues",
        JSON.stringify({ paymentPlan, paymentValue, paymentName })
      );
      clickFn(2);
    } else {
      alert("Please choose a payment plan");
    }
  };

  return (
    <>
      <div className="contentBox">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <form>
          <div>
            <input
              type="radio"
              name="plan"
              id="arcade"
              value={paymentPlan === "monthly" ? 9 : 90}
              onChange={paymentPlanHandler}
            />
            <label
              for="arcade"
              className={
                paymentValue === 9 || paymentValue === 90
                  ? "planOption selected"
                  : "planOption"
              }
            >
              <img src={arcadeIcon} alt="arcade-icon" />
              <div className="planInfo">
                <h2>Arcade</h2>
                <p>{paymentPlan === "monthly" ? "$9/mo" : "$90/yr"}</p>
                <span className={paymentPlan === "monthly" ? "hide" : ""}>
                  2 months free
                </span>
              </div>
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="plan"
              id="advanced"
              value={paymentPlan === "monthly" ? 11 : 110}
              onChange={paymentPlanHandler}
            />
            <label
              for="advanced"
              className={
                paymentValue === 11 || paymentValue === 110
                  ? "planOption selected"
                  : "planOption"
              }
            >
              <img src={advancedIcon} alt="arcade-icon" />
              <div className="planInfo">
                <h2>Advanced</h2>
                <p>{paymentPlan === "monthly" ? "$11/mo" : "$110/yr"}</p>
                <span className={paymentPlan === "monthly" ? "hide" : ""}>
                  2 months free
                </span>
              </div>
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="plan"
              id="pro"
              value={paymentPlan === "monthly" ? 13 : 130}
              onChange={paymentPlanHandler}
            />
            <label
              for="pro"
              className={
                paymentValue === 13 || paymentValue === 130
                  ? "planOption selected"
                  : "planOption"
              }
            >
              <img src={proIcon} alt="arcade-icon" />
              <div className="planInfo">
                <h2>Pro</h2>
                <p>{paymentPlan === "monthly" ? "$13/mo" : "$130/yr"}</p>
                <span className={paymentPlan === "monthly" ? "hide" : ""}>
                  2 months free
                </span>
              </div>
            </label>
          </div>
        </form>
        <div className="timeSwitch">
          <div className="switchContainer">
            <span>Monthly</span>
            <div>
              <input
                type="checkbox"
                name="timeSwitch"
                id="timeSwitch"
                checked={paymentPlan === "yearly" ? true : false}
                value={paymentPlan}
                onChange={changeHandler}
              />
              <label for="timeSwitch" className="switch"></label>
            </div>
            <span>Yearly</span>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="backward" onClick={() => clickFn(0)}>
          Go back
        </button>
        <button className="forward" onClick={clickHandler}>
          Next Step
        </button>
      </div>
    </>
  );
};
