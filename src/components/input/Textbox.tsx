import React from "react";
import { InputTypes } from "./types";
import { useField } from "formik";

type Props = {
  options?: string;
  label?: string;
  name: string;
  type: InputTypes;
  autoFocus?: boolean;
  css?: {
    inputContainer?: string;
    inputElement?: string;
  };
  placeholder?: string;
  InputAdornment?: React.ReactNode;
};

export default React.memo(function Textbox({ label = "", ...props }: Props) {
  const [fields, meta] = useField(props);

  const isFieldDirty = meta.touched && meta.error ? "border-red-600" : "";

  return (
    <div
      className={`phone: w-full flex flex-col my-3 ${props.css?.inputContainer}`}
    >
      {label && (
        <label
          className="font-openSans my-1 text-sm capitalize"
          htmlFor={props.name}
        >
          {label}
        </label>
      )}
      <input
        className={`phone:w-full p-2 font-openSans text-sm border-2 ${isFieldDirty} rounded outline-none ${props.css?.inputElement}`}
        {...fields}
        {...props}
      />
      {props.InputAdornment ?? ""}
      {meta.touched && meta.error ? (
        <div className="text-[12px] font-openSans text-red-600">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
});
