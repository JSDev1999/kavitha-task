import { Container } from "@mui/material";
import React, { Fragment } from "react";
import Header from "./components/Header";
import Router from "./routes";

const App = () => {
  return (
    <Fragment>
      <Router />
    </Fragment>
  );
};

export default App;
