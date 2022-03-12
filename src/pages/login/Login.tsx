import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "ui/buttons/MainButton";
import { MainInput } from "ui/inputs/MainInput";
import { useUserEmailValue, useUserNameValue, useUserToken } from "atoms/atoms";
import { getTokenUser } from "lib/apis";

export function LoginPage() {
   const navigate = useNavigate();
   const userEmail = useUserEmailValue();
   const userFullname = useUserNameValue();
   const [userToken, setUserToken] = useUserToken();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const password = e.target.password.value;
      if (!password) return alert("Ingrese una contraseña");

      const token = await getTokenUser(userEmail.email, password);

      if (token) {
         setUserToken({
            token: token,
         });

         alert(`Bienvenido ${userFullname.fullname}!`);
         navigate("/");
      } else {
         alert(`La contraseña es incorrecta`);
      }
   };

   return (
      <div>
         <h1>Login page</h1>
         <form onSubmit={handleSubmit}>
            <MainInput label={"contraseña"} type={"password"} name={"password"} />
            <MainButton>Ingresar</MainButton>
         </form>
      </div>
   );
}
