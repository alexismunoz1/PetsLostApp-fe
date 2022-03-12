import React from "react";
import css from "./index.css";

export function MainButton(props) {
   const { children, handleClick } = props;
   return (
      <button className={css.root} onClick={handleClick}>
         {children}
      </button>
   );
}
