import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import clsases from "./CircularLoading.module.css";
const CircularLoading: React.FC<{ panner: string }> = ({ panner }) => {
  return (
    <div className={clsases.circle}>
      <CircularProgress color="inherit" size="64px" className="mb-8" />
      <p>{panner}...</p>
    </div>
  );
};
export default CircularLoading;
