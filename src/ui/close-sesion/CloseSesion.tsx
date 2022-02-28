import React, { useState } from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import {
   useUserEmail,
   useSetUserName,
   useSetUserToken,
   useSetUserCords,
   useBurgerState,
} from "hooks/hooks";

export function CloseSesion() {
   const navigate = useNavigate();
   const [burgerState, setBurgerState] = useBurgerState();

   const [{ email }, setEmail] = useUserEmail();
   const setName = useSetUserName();
   const setToken = useSetUserToken();
   const setCords = useSetUserCords();

   const handleClick = (e) => {
      setBurgerState(!burgerState);

      if (e.target.textContent == "Cerrar sesion") {
         localStorage.removeItem("user_data");

         setEmail({
            email: null,
         });
         setName({
            fullname: null,
         });
         setToken({
            token: null,
         });
         setCords({
            lat: null,
            lng: null,
         });

         navigate("/");
      } else {
         navigate("/verify-email");
      }
   };

   return (
      <div>
         <p className={css.email}>{email ? email : ""}</p>
         <p className={css["sign-off"]} onClick={handleClick}>
            {email ? "Cerrar sesion" : "Iniciar sesion"}
         </p>
      </div>
   );
}
