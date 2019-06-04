import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  margin: 200px 0px 0px 30px;
`;
export default withRouter(({ match: { params: { tags } } }) => {
  return <Container>#{tags}</Container>;
});
