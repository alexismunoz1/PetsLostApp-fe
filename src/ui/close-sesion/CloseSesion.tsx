import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import {
   useSetUserCoords,
   useUserDataAtom,
   useBurgerState,
   useSetMyPets,
} from "hooks/atoms";

export function CloseSesion() {
   const navigate = useNavigate();
   const setCoords = useSetUserCoords();
   const setMyPets = useSetMyPets();
   const [{ email }, setUseData] = useUserDataAtom();
   const [burgerState, setBurgerState] = useBurgerState();

   const handleClick = (e) => {
      setBurgerState(!burgerState);

      if (e.target.textContent == "Cerrar sesion") {
         localStorage.removeItem("user_data");
         setUseData({
            email: null,
            fullname: null,
            token: null,
         });
         setCoords({ currentLat: null, currentLng: null });
         setMyPets({
            myPets: [],
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
