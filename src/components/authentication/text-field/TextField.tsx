import { ChangeEvent } from 'react'
import styles  from "./textfield.module.css";

export default function TextField({
  width,
  height,
  name,
  value,
  onChange,
  placeholder,
  type,
  error
}: {
  width: number | string;
  height: number | string;
  name: string,
  value: string  | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  error: boolean
}) {
  return (
    <input
      className={`${error ? styles.textfield_error : styles.textfield} p-12 m-0`}
      name={name}
      value={value}
      style={{ width: width, height: height }}
      type={type}
      placeholder={error ? `${placeholder}*` : placeholder}
      onChange={onChange}
    />
  );
}
