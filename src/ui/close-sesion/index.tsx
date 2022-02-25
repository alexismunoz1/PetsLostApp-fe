import React, { useState } from "react";
import css from "./index.css";

function CloseSesion(props) {
   const [sesion, setSesion] = useState("Iniciar sesion");

   return (
      <div className={css["menu-div-emial"]}>
         <p className={css["menu-email"]}>pepe@gmail.com</p>
         <p className={css["menu-sign-off"]}>{sesion}</p>
      </div>
   );
}

export { CloseSesion };
