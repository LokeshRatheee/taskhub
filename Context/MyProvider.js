// MyProvider.js

import React, { useState } from 'react';
import MyContext from './MyContext.js';

const MyProvider = ({ children }) => {
  const [email, setemail] = useState();
  const [password , setpassword] = useState()
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ email, setemail  , password , setpassword}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
