import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import clsases from "./CircularLoading.module.css";
const CircularLoading: React.FC<{}> = ({ }) => {
  return (
    <div className={`${clsases.circle} w-full h-full`}>
      <CircularProgress color="inherit" size="22px" className="" />
      {/* <p>{panner}...</p> */}
    </div>
  );
};
export default CircularLoading;
