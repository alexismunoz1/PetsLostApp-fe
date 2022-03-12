import React from "react";
import css from "./index.css";

type MainInputProps = {
   label?: string;
   type?: string;
   placeholder?: string;
   name?: string;
   defaultValue?: string;
};

export function MainInput(props: MainInputProps) {
   const { label, type, placeholder, name, defaultValue } = props;

   return (
      <div className={css.root}>
         <label className={css.label}> {label ? label : ""} </label>
         <input
            type={type ? type : "text"}
            name={name}
            placeholder={placeholder ? placeholder : ""}
            defaultValue={defaultValue ? defaultValue : ""}
            className={css.input}
         ></input>
      </div>
   );
}
