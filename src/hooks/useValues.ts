import { useState, ChangeEvent } from "react";

export default function useValues({
  initialValues,
  initialErrors,
}: {
  initialValues: any;
  initialErrors: any;
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== "") {
      setErrors({ ...errors, [e.target.name]: false });
    } else {
      setErrors({ ...errors, [e.target.name]: true });
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const initErrors = () => {
    let aux: any = {};
    Object.keys(values).forEach((key) => {
      if (values[key].trim() === "") {
        aux[key] = true;
      }
    });
    setErrors(aux);
  };

  const hasErrors = () => {
    const count = Object.values(errors).filter(item => item === true);
    return count.length > 0;
  };

  return [values, onChange, errors, initErrors, hasErrors];
}
