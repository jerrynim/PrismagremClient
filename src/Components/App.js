import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import theme from "../Styles/theme";
import { useQuery } from "react-apollo-hooks";
import { APP_QUERIES } from "./AppQueries";
import Footer from "./Footer";
import styled from "styled-components";
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(APP_QUERIES);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};
