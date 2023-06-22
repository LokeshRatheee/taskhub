/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useContext, useCallback } from "react";
import { debounce } from "lodash";
import styles from "./input.module.css";
import MyContext from "../../../../Context/MyContext";


export default function Input({ placeholder }) {


  const { email, setemail } = useContext(MyContext);
  const {password ,setpassword} = useContext(MyContext);

  let debouncedUpdateData ;
  if (placeholder === "me@example.com") {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     debouncedUpdateData = useCallback(
      debounce((value) => setemail(value), 500),
      [setemail]
    );
  }
  else if(placeholder === "password"){
     // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
     debouncedUpdateData = useCallback(
      debounce((value) => setpassword(value), 500),
      [setpassword]
    );
  }

  const handleUpdateData = (value) => {
    debouncedUpdateData(value);
  };

  return (
    <>
      <input
        id="name"
        className={styles.inputBox}
        type="text"
        placeholder={placeholder}
        name="name"
        required
        onChange={(e) => handleUpdateData(e.target.value)}
      />
    </>
  );
}
