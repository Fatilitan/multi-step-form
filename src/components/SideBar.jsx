import React from "react";
import "../styles/main.scss";

export const SideBar = ({ pageIndx }) => {
  return (
    <div className="sideBar">
      <div className="stepsContainer">
        <div className="steps">
          <div className="stepsNum" id={pageIndx === 0 ? "active" : ""}>
            <span>1</span>
          </div>
          <div>
            <span>STEP 1</span>
            <h2>Your Info</h2>
          </div>
        </div>
        <div className="steps">
          <div className="stepsNum" id={pageIndx === 1 ? "active" : ""}>
            <span>2</span>
          </div>
          <div>
            <span>STEP 2</span>
            <h2>Select plan</h2>
          </div>
        </div>
        <div className="steps">
          <div className="stepsNum" id={pageIndx === 2 ? "active" : ""}>
            <span>3</span>
          </div>
          <div>
            <span>STEP 3</span>
            <h2>Add-ons</h2>
          </div>
        </div>
        <div className="steps">
          <div className="stepsNum" id={pageIndx === 3 ? "active" : ""}>
            <span>4</span>
          </div>
          <div>
            <span>STEP 4</span>
            <h2>Summary</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
