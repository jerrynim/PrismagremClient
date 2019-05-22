import React, { useRef } from "react";
import styled from "styled-components";
import FormData from "form-data";
const Input = styled.input`
  margin-top: 300px;
`;
export default () => {
  const inputRef = useRef(null);

  const onChange = async () => {
    const file = await inputRef.current.files[0];
    console.log(file);
    const sendRequset = () => {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        //progress
        req.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            console.log((event.loaded / event.total) * 100);
          }
        });

        let formData = new FormData();
        formData.append("name", "hahkjahkajlh");
        formData.append("file", file);
        req.open("POST", "http://localhost:4000/upload");
        req.send(formData);
      });
    };

    if (file) {
      try {
        sendRequset(file);
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return <Input type={"file"} ref={inputRef} onChange={onChange} />;
};
