import { useState } from "react";

export default (defaultValue) => {
  if (defaultValue === null) {
    const newDefaultValue = "";
    const [value, setValue] = useState(newDefaultValue);

    const onChange = (e) => {
      const {
        target: { value }
      } = e;
      setValue(value);
    };

    return { value, onChange, setValue };
  } else {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => {
      const {
        target: { value }
      } = e;
      setValue(value);
    };
    return { value, onChange, setValue };
  }
};
