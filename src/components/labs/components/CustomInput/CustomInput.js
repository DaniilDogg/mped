import React, { useCallback, useState } from "react";
import styles from "./CustomInput.module.scss";
export default function CustomInput({ inputRef, placeholder, regExpPattern }) {
  const [value, setValue] = useState("");

  const changeHandler = useCallback(
    (e) => {
      let val = e.target.value.trim();
      val = val.replace(",", ".");
      if (regExpPattern.test(val) || val === "") {
        console.log(regExpPattern.test(val));
        setValue(val);
      }
    },
    [regExpPattern]
  );

  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      ref={inputRef}
      value={value}
      onChange={changeHandler}
    />
  );
}
