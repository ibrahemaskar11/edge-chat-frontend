import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import clsases from "./CircularLoading.module.css";
const CircularLoading: React.FC<{ button: boolean }> = ({ button }) => {
  return (
    <div className={`${clsases.circle} w-full h-full`}>
      <CircularProgress
        color="inherit"
        size={`${button ? "22px" : "64px"}`}
        className=""
      />
      {/* <p>{panner}...</p> */}
    </div>
  );
};
export default CircularLoading;
