import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: 1px solid #efefef;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.bgColor};
  padding: ${(props) =>
    props.value === "" ? "9px 0 11px 8px" : "20px 0 11px 8px"};
  width: 268px;
  height: 39px;
  font-size: 12px;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  ::placeholder {
    color: #999999;
  }
  :focus {
    border: 1px solid #999999;
    border-radius: 4px;
  }
`;

const Input = ({ placeholder, value, onChange, type = "text", className }) => (
  <Container
    className={className}
    value={value}
    onChange={onChange}
    type={type}
  />
);
Input.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Input;
