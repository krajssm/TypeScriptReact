import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props:any) => {
//   const token = localStorage.getItem("auth");
let token =0;
  return <>{token ? <Route {...props} /> : <Redirect to="/login" />}</>;
};

export default PrivateRoute;