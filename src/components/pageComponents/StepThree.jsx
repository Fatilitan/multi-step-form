import React, { useState, useEffect } from "react";
import "../../styles/main.scss";

export const StepThree = ({ clickFn }) => {
  const [paymentPlan, setPaymentPlan] = useState("monthly");
  const [items, setItems] = useState({});

  useEffect(() => {
    const previousValues = JSON.parse(localStorage.getItem("stepTwoValues"));
    setPaymentPlan(previousValues.paymentPlan);
    const previousItems = JSON.parse(localStorage.getItem("stepThreeValues"));
    if (previousItems) {
      setItems(previousItems.items);
    }

    localStorage.removeItem("stepThreeValues");
  }, []);

  const itemHandler = (event) => {
    const name = event.target.id;
    const value = Number(event.target.value);
    if (items.hasOwnProperty(name)) {
      const updatedItems = { ...items };
      delete updatedItems[name];
      setItems(updatedItems);
    } else {
      setItems({ ...items, [name]: value });
    }
  };

  const clickHandler = () => {
    localStorage.setItem("stepThreeValues", JSON.stringify({ items }));
    clickFn(3);
  };

  return (
    <>
      <div className="contentBox">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <form>
          <div className="flexContainer">
            <input
              type="checkbox"
              name="add-on"
              id="online-service"
              value={paymentPlan === "monthly" ? 2 : 20}
              checked={items["online-service"] ? true : false}
              onChange={itemHandler}
            />
            <label for="online-service" className="addOnOption">
              <div className="check-box-icon">CheckBox</div>
              <div className="planInfo">
                <h2>Online service</h2>
                <p>Acces to multi player games</p>
              </div>
              <span>{paymentPlan === "monthly" ? "+$2/mo" : "+$20/yr"}</span>
            </label>
          </div>

          <div className="flexContainer">
            <input
              type="checkbox"
              name="add-on"
              id="larger-storage"
              value={paymentPlan === "monthly" ? 2 : 20}
              checked={items["larger-storage"] ? true : false}
              onChange={itemHandler}
            />
            <label for="larger-storage" className="addOnOption">
              <div className="check-box-icon">CheckBox</div>
              <div className="planInfo">
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud space</p>
              </div>
              <span>{paymentPlan === "monthly" ? "+$2/mo" : "+$20/yr"}</span>
            </label>
          </div>

          <div className="flexContainer">
            <input
              type="checkbox"
              name="add-on"
              id="customizable-profile"
              value={paymentPlan === "monthly" ? 3 : 30}
              checked={items["customizable-profile"] ? true : false}
              onChange={itemHandler}
            />
            <label for="customizable-profile" className="addOnOption">
              <div className="check-box-icon">CheckBox</div>
              <div className="planInfo">
                <h2>Customizable profile</h2>
                <p>Custom theme on your profile</p>
              </div>
              <span>{paymentPlan === "monthly" ? "+$3/mo" : "+$30/yr"}</span>
            </label>
          </div>
        </form>
      </div>
      <div className="buttonContainer">
        <button className="backward" onClick={() => clickFn(1)}>
          Go back
        </button>
        <button className="forward" onClick={clickHandler}>
          Next Step
        </button>
      </div>
    </>
  );
};
