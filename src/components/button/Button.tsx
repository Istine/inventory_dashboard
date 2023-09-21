import React from "react";
import { Buttontypes } from "./types";

type ButtonProps = {
  text: string;
  css?: {
    buttonContainer?: string;
    buttonElement?: string;
  };
  type: Buttontypes;
  loading?: boolean;
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  text = "",
  css = {},
  type = Buttontypes.SUBMIT,
  disabled = true,
  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {},
  loading = false,
}: ButtonProps) {
  const bgColorWhenLoading = loading ? "bg-darkPrimary" : "bg-primary";

  const isDisabledWhenLoading = loading ? disabled : false;

  const cursorWhenLoading = loading
    ? "cursor-not-allowed"
    : disabled
    ? "cursor-not-allowed"
    : "cursor-pointer";

  return (
    <div
      className={`phone:w-full my-2 ${bgColorWhenLoading} text-secondary font-openSans text-sm  rounded ${css.buttonContainer}`}
    >
      <button
        type={type}
        disabled={isDisabledWhenLoading}
        className={`phone:w-full border-0 outline-none p-3 text-center ${cursorWhenLoading} capitalize ${css.buttonElement}`}
        onClick={onClick}
      >
        {loading ? "Loading..." : text}
      </button>
    </div>
  );
}
