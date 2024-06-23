import React, { useState } from "react";
import FormContext from "./formContext";

const FormContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    surveyTopic: "",
    feedBack:"",
    technology:{
      favouriteProgramming: "",
      yearOfExperience:0,
    },
  
    health:{
      excersiceFrequency:"",
      dietPrefrence:""
    },
  
    education:{
      highestQualification:"",
      fieldOfStudy:"",
    }
  });
  return (
    <FormContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
