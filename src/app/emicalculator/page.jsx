import React from "react";
import EmiCalc from "./EmiCalc";

export const metadata = {
  title: "EMI Calculator | Calcya",
  description: "This is a EMI Calculator Page",
  // other metadata
};
const page = () => {
  return (
    <div>
      <EmiCalc />
    </div>
  );
};

export default page;
