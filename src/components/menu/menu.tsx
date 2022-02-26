import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./index.css";
import { CloseSesion } from "ui/close-sesion";
import { useRecoilState } from "recoil";
import { burgerStateAtom, useSetToken } from "hooks/hooks";

const inactive = css.menu;
const active = `${css.menu} ${css.active}`;

export function Menu() {
   const navigate = useNavigate();
   const [burgerState, setBurgerState] = useRecoilState(burgerStateAtom);
   const [userToken, setToken] = useSetToken();
   const handleClick = (e) => {
      setBurgerState(!burgerState);

      if (!userToken.token) {
         navigate("/verify-email");
      } else if (e.target.id == "MyData") {
         navigate("/my-data");
      } else if (e.target.id == "MyPets") {
         navigate("/my-pets");
      } else if (e.target.id == "ReportPet") {
         navigate("/report-pets");
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
