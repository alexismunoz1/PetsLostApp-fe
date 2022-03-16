import React from "react";
import css from "./index.css";

const inactive = css.burger;
const active = `${css.burger} ${css.active}`;

export function BurgerMenu(props) {
   const { onBurger, handleClick } = props;
   return (
      <div className={onBurger ? active : inactive} onClick={handleClick}>
         <i className={css.burgerI}></i>
         <i className={css.burgerI}></i>
         <i className={css.burgerI}></i>
      </div>
   );
}
