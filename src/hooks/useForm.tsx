import React from "react";
import { useState, useEffect } from "react";

export interface IValidateOption<Type> {
  initialState: Type;
  required: (value: Type) => boolean;
  error: string;
}

export interface IUseForm<Type> {
  value: Type;
  error: string;
  handleChange: (val: Type) => void;
}

const useForm = <Type,>(
  validateOption: IValidateOption<Type>
): IUseForm<Type> => {
  // custom react hook for form validation
  const [value, setValue] = useState<Type>(validateOption.initialState);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const validate = (value: Type) => {
      // validate the value
      if (!validateOption.required(value)) {
        setError(validateOption.error);
        console.log(validateOption.error);
      } else {
        setError("");
      }
    };
    // validate on every change and when the user stop writing
    const timeout = setTimeout(() => {
      validate(value);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, validateOption]);

  const handleChange = (val: Type) => {
    setValue(val);
  };
  return { value, error, handleChange };
};

export default useForm;
