import React, { useRef } from "react";
import styled from "styled-components";
import axios from "axios";
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
          // if (event.lengthComputable) {
          //   const copy = { ...this.state.uploadProgress };
          //   copy[file.name] = {
          //     state: "pending",
          //     percentage: (event.loaded / event.total) * 100
          //   };
          console.log((event.loaded / event.total) * 100);
        });

        let formData = new FormData();
        formData.append("name", "hahkjahkajlh");
        formData.append("file", file, file.name);
        console.log(formData);
        axios({
          method: "post",
          url: "http://localhost:4000/upload",
          data: formData
        });
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
