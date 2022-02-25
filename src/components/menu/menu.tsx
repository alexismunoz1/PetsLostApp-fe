import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./index.css";
import { CloseSesion } from "../../ui/close-sesion";
import { useRecoilState, useRecoilValue } from "recoil";
import { burgerStateAtom, burgerState } from "../../hooks/hooks";

const inactive = css.menu;
const active = `${css.menu} ${css.active}`;

export function Menu() {
   const [burgerState, setBurgerState] = useRecoilState(burgerStateAtom);
   const handleClick = () => setBurgerState(!burgerState);

   return (
      <div className={burgerState ? active : inactive}>
         <div className={css["menu-div-text"]}>
            <Link to="/verify-email">
               <p className={css["menu-text"]} onClick={handleClick}>
                  Mis datos
               </p>
            </Link>
            <p className={css["menu-text"]}>Mis mascotas reportadas</p>
            <p className={css["menu-text"]}>Reportar mascota</p>
         </div>
         <CloseSesion />
      </div>
   );
}
