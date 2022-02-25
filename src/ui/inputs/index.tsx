import React from "react";
import css from "./index.css";

export function InputComp(props) {
   const { label, type, placeholder, name } = props;

   return (
      <div className={css.root}>
         <label className={css.label}>{label == null ? "" : label}</label>
         <input
            type={type || "text"}
            name={name}
            placeholder={placeholder == null ? "" : placeholder}
            className={css.input}
         ></input>
      </div>
   );
}
