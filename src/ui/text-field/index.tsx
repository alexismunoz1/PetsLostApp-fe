import React from "react";
import css from "./index.css";

export function TextField({ type, placeholder }) {
   return <input type={type} placeholder={placeholder} className={css.root}></input>;
}
