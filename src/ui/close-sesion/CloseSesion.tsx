import React from "react";
import { useNavigate } from "react-router-dom";
import {
   useSetUserCoords,
   useUserDataAtom,
   useBurgerState,
   useSetMyPets,
} from "hooks/atoms";

const emailStyle = {
   fontFamily: "Poppins",
   fontSize: "24px",
};

const signOff: any = {
   fontFamily: "Poppins",
   fontSize: "16px",
   textDecorationLine: "underline",
   textTransform: "uppercase",
   color: "#c6558b",
   cursor: "pointer",
};

export function CloseSesion() {
   const navigate = useNavigate();
   const setCoords = useSetUserCoords();
   const setMyPets = useSetMyPets();
   const [{ email }, setUseData] = useUserDataAtom();
   const [burgerState, setBurgerState] = useBurgerState();

   const handleSesion = (e) => {
      setBurgerState(!burgerState);

      if (e.target.textContent == "Cerrar sesion") {
         localStorage.removeItem("user_data");
         setCoords({ currentLat: null, currentLng: null });
         setMyPets({ myPets: [] });
         setUseData({
            email: null,
            fullname: null,
            token: null,
         });
         navigate("/");
      } else {
         navigate("/verify-email");
      }
   };

   return (
      <div>
         <p style={emailStyle}>{email ? email : ""}</p>
         <p style={signOff} onClick={handleSesion}>
            {email ? "Cerrar sesion" : "Iniciar sesion"}
         </p>
      </div>
   );
}
