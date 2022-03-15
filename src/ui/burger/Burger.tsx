import React from "react";
import css from "./index.css";

const inactive = css.burger;
const active = `${css.burger} ${css.active}`;

export function BurgerMenu({ onBurger }: { onBurger: boolean }) {
   return (
      <div className={onBurger ? active : inactive}>
         <i className={css.burgerI}></i>
         <i className={css.burgerI}></i>
         <i className={css.burgerI}></i>
      </div>
   );
}
