import React, { useState, useEffect } from "react";
import "../../styles/main.scss";

export const StepFour = ({ clickFn }) => {
  const [paymentPlan, setPaymentPlan] = useState("monthly");
  const [paymentValue, setPaymentValue] = useState();
  const [items, setItems] = useState({});
  const [paymentName, setPaymentName] = useState("");

  useEffect(() => {
    const previousValues = JSON.parse(localStorage.getItem("stepTwoValues"));
    setPaymentPlan(previousValues.paymentPlan);
    setPaymentValue(previousValues.paymentValue);
    setPaymentName(previousValues.paymentName);
  }, []);

  useEffect(() => {
    const previousValues = JSON.parse(localStorage.getItem("stepThreeValues"));
    setItems(previousValues.items);
  }, []);

  const itemArray = Object.entries(items);

  const yrOrMo = paymentPlan === "monthly" ? "mo" : "yr";

  let totalPrice = paymentValue;
  for (let item of itemArray) {
    totalPrice += item[1];
  }

  return (
    <>
      <div className="contentBox">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before comfirming.</p>
        <div className="summaryContainer">
          <div className="planContainer">
            <div>
              <h2>
                {paymentName} ({paymentPlan})
              </h2>
              <a href="#" onClick={() => clickFn(1)}>
                change
              </a>
            </div>
            <span>
              ${paymentValue}/{yrOrMo}
            </span>
          </div>
          {itemArray.length <= 0 ? null : <hr />}
          <div className="addOnContainer">
            {itemArray.map(([key, value]) => (
              <>
                <p>{key}</p>
                <span>
                  +${value}/{yrOrMo}
                </span>
              </>
            ))}
          </div>
        </div>
        <div className="totalContainer">
          <h2>Total (per {paymentPlan === "monthly" ? "month" : "year"})</h2>
          <span>
            ${totalPrice}/{yrOrMo}
          </span>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="backward" onClick={() => clickFn(2)}>
          Go back
        </button>
        <button className="forward" id="confirm" onClick={() => clickFn(4)}>
          Confirm
        </button>
      </div>
    </>
  );
};
