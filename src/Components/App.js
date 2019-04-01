import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import theme from "../Styles/theme";
import { useQuery } from "react-apollo-hooks";
import { APP_QUERIES } from "./AppQueries";

export default () => {
  const { data } = useQuery(APP_QUERIES);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router isLoggedIn={data} />
      </>
    </ThemeProvider>
  );
};
