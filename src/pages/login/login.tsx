import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "ui/buttons";
import { InputComp } from "ui/inputs";
import { useUserEmailValue, useUserNameValue, useUserToken } from "hooks/hooks";
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
            <InputComp label={"contraseña"} type={"password"} name={"password"} />
            <MainButton>Ingresar</MainButton>
         </form>
      </div>
   );
}
