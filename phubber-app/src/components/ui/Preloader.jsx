import React from "react";
import logo from "../../../static/logo_vertical.png";
import CircularProgress from "./CircularProgress";

const Preloader = () => (
  <div className="preloader">
    <img src={logo} style={{ marginBottom: 20 }} />
    <div style={{ paddingTop: 20 }}>
      <CircularProgress />
    </div>
  </div>
);

export default Preloader;
