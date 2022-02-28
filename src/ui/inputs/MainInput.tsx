import React from "react";
import css from "./index.css";

export function MainInput(props) {
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
