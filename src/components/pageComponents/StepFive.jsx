import React from "react";
import "../../styles/main.scss";
import thankYouIcon from "../../../assets/images/icon-thank-you.svg";

export const StepFive = () => {
  return (
    <>
      <div className="contentBox" id="confirmation">
        <img src={thankYouIcon} alt="thank you" />
        <h1>Thank you!</h1>
        <p>
          Thanks for comfirming our subscription! We hope you have fun using our
          platform. If you need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </>
  );
};
