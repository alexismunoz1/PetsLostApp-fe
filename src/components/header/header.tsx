import React, { useState } from "react";
import css from "./index.css";
import logo from "assets/logo.svg";
import { BurgerMenu } from "../../ui/burger/burger";
import { useRecoilState } from "recoil";
import { burgerStateAtom } from "../../hooks/hooks";
import { Link } from "react-router-dom";

function Header() {
   const [burgerState, setBurgerState] = useRecoilState(burgerStateAtom);
   const handleClick = () => setBurgerState(!burgerState);

   return (
      <header className={css.root}>
         <Link to={"/"}>
            <img className="" src={logo} />
         </Link>
         <div onClick={handleClick}>
            <BurgerMenu onBurger={burgerState} />
         </div>
      </header>
   );
}

export { Header };
