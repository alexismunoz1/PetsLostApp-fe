import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { useUserToken, useBurgerState } from "atoms/atoms";
import { CloseSesion } from "ui/close-sesion/CloseSesion";

const inactive = css.menu;
const active = `${css.menu} ${css.active}`;

export function Menu() {
   const navigate = useNavigate();
   const [burgerState, setBurgerState] = useBurgerState();
   const [userToken, setToken] = useUserToken();
   const handleClick = (e) => {
      setBurgerState(!burgerState);

      if (userToken.token) {
         switch (e.target.id) {
            case "MyData":
               navigate("/my-data");
               break;
            case "MyPets":
               navigate("/my-pets");
               break;
            case "ReportPet":
               navigate("/report-pets");
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
