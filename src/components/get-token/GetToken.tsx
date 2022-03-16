import React from "react";
import { useNavigate } from "react-router-dom";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";
import { getTokenUser } from "lib/apis";
import { useSetToken, useUserDataAtomValue } from "hooks/atoms";

export function GetTokenComp() {
   const navigate = useNavigate();
   const setToken = useSetToken();
   const { email, fullname } = useUserDataAtomValue();

   const sendPassword = async (e: React.ChangeEvent<HTMLFormElement>) => {
      // si la contraseña es correcta, se envia al servidor
      // y devuelve el token del usuario
      e.preventDefault();
      const password: string = e.target.password.value;
      if (!password) return alert("Ingrese una contraseña");

      const token: string = await getTokenUser(email, password);
      if (token) {
         setToken(token);
         alert(`Bienvenidx ${fullname}!`);
         navigate("/");
      } else {
         alert(`La contraseña es incorrecta`);
      }
   };

   return (
      <div>
         <form onSubmit={sendPassword}>
            <MainInput label={"contraseña"} type={"password"} name={"password"} />
            <MainButton>Ingresar</MainButton>
         </form>
      </div>
   );
}
