import { useState } from "react";

const useForm = (
  userDetails,
  setUserDetails,
  validate,
  setIsModalOpen
) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name,value } = e.target;
    setUserDetails((prevValues) => {
      const newValues = { ...prevValues };

      if (name.includes(".")) {
        const keys = name.split(".");
        console.log(keys);
        newValues[keys[0]] = {
          ...newValues[keys[0]],
          [keys[1]]: value,
        };
      } else {
        newValues[name] = value;
      }

      return newValues;
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate) {

      const validationErrors = validate(userDetails);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        setIsModalOpen(true);
      }
    }
  };


  const resetForm = () => {
    setUserDetails(userDetails);
    setErrors({});
  };


  return {
    userDetails,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
