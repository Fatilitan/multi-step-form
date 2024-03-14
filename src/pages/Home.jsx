import React from "react";
import "../styles/main.scss";
import { SideBar } from "../components/SideBar";
import { StepOne } from "../components/pageComponents/StepOne";
import { StepTwo } from "../components/pageComponents/StepTwo";
import { StepThree } from "../components/pageComponents/StepThree";
import { StepFour } from "../components/pageComponents/StepFour";
import { StepFive } from "../components/pageComponents/StepFive";
import { useState } from "react";

export const Home = () => {
  const [pageIndx, setPageIndx] = useState(0);
  let page;

  switch (pageIndx) {
    case 0:
      page = <StepOne clickFn={setPageIndx} />;
      break;
    case 1:
      page = <StepTwo clickFn={setPageIndx} />;
      break;
    case 2:
      page = <StepThree clickFn={setPageIndx} />;
      break;
    case 3:
      page = <StepFour clickFn={setPageIndx} />;
      break;
    case 4:
      page = <StepFive clickFn={setPageIndx} />;
      break;
    default:
      page = <StepOne clickFn={setPageIndx} />;
  }

  return (
    <div className="rootContainer">
      <div className="content">
        <SideBar pageIndx={pageIndx} />
        {page}
      </div>
    </div>
  );
};
