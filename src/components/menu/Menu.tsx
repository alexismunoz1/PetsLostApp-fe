import React, { HTMLProps } from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { useTokenValue, useBurgerState } from "hooks/atoms";
import { CloseSesion } from "ui/close-sesion/CloseSesion";

const inactive = css.menu;
const active = `${css.menu} ${css.active}`;

export function Menu() {
   const navigate = useNavigate();
   const userToken = useTokenValue();
   const [burgerState, setBurgerState] = useBurgerState();

   const handleClick = (e: React.ChangeEvent<any>) => {
      setBurgerState(!burgerState);

      if (userToken) {
         switch (e.target.id) {
            case "MyData":
               navigate("/my-data");
               break;
            case "MyPets":
               navigate("/my-pets");
               break;
            case "ReportPet":
               navigate("/report-pet");
               break;
         }
      } else {
         navigate("/verify-email");
      }
   };

   return (
      <div className={burgerState ? active : inactive}>
         <div className={css["menu-div-text"]}>
            <p className={css["menu-text"]} id="MyData" onClick={handleClick}>
               Mis datos
            </p>
            <p className={css["menu-text"]} id="MyPets" onClick={handleClick}>
               Mis mascotas reportadas
            </p>
            <p className={css["menu-text"]} id="ReportPet" onClick={handleClick}>
               Reportar mascota
            </p>
         </div>
         <CloseSesion />
      </div>
   );
}
