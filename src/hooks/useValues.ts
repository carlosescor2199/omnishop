import { useState, ChangeEvent } from "react";

export default function useValues(props: any) {
  const [values, setValues] = useState(props);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(values)
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return [values, onChange];
}
