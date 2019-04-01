import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import theme from "../Styles/theme";

export default () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      {(isLoggedIn) => <Router isLoggedIn={isLoggedIn} />}
    </>
  </ThemeProvider>
);
