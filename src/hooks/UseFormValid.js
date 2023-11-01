import React from "react";

const useFormValidator = () => {

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [formValid, setFormValid] = React.useState(false);

  const handleChange = (e) => {
    const input = e.currentTarget;
    const name = e.target.name;
    const val = e.target.value;

    setValues({
      ...values,
      [name]: val,
    });

    setErrors({
      ...errors,
      [name]: input.validationMessage,
    });

    setFormValid(input.form.checkValidity());
  };

  return { values, errors, formValid, handleChange };

}

export default useFormValidator;