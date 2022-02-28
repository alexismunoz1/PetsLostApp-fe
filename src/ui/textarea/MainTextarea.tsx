import React from "react";
import css from "./index.css";

export function MainTextarea(props) {
   const { label, name, customvalue, placeholder } = props;

   return (
      <div>
         <label className={css.label}>{label}</label>
         <textarea
            className={css.textarea}
            name={name ? name : ""}
            defaultValue={customvalue ? customvalue : ""}
            placeholder={placeholder ? placeholder : ""}
         ></textarea>
      </div>
   );
}
