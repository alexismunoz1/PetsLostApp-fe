import React from "react";
import css from "./index.css";
import logo from "assets/logo.svg";

function Header() {
   return (
      <header className={css.root}>
         <img className="" src={logo} />
      </header>
   );
}

export { Header };
