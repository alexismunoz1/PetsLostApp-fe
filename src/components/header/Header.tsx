import React from "react";
import css from "./index.css";
import logo from "assets/logo.svg";
import { BurgerMenu } from "ui/burger/Burger";
import { useBurgerState } from "hooks/hooks";
import { useNavigate } from "react-router-dom";

function Header() {
   const navigate = useNavigate();
   const [burgerState, setBurgerState] = useBurgerState();

   const handleClick = (e) => {
      if (e.target.id == "Logo") {
         navigate("/");
         setBurgerState(false);
      } else {
         setBurgerState(!burgerState);
      }
   };

   return (
      <header className={css.root}>
         <img className="" id="Logo" src={logo} onClick={handleClick} />
         <div onClick={handleClick}>
            <BurgerMenu onBurger={burgerState} />
         </div>
      </header>
   );
}

export { Header };
