import React, { useEffect } from "react";
import { Home } from "./pages/Home";

export const App = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("isReloading", "true");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const isReloading = sessionStorage.getItem("isReloading");
    if (isReloading === "true") {
      localStorage.clear();
      sessionStorage.removeItem("isReloading");
    }
  }, []);
  return (
    <>
      <Home />
    </>
  );
};
