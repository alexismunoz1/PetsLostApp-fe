import React from "react";
import css from "./index.css";

// type props = {
//    children: React.ReactNode;
//    onClick: () => void;
// };

export function MainButton(props) {
   return <button className={css.root}>{props.children}</button>;
}
