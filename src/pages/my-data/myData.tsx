import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "ui/buttons";
import { InputComp } from "ui/inputs";
import { emailRegex, useSetToken, useUserEmail, useUserName } from "hooks/hooks";
import { getTokenUser, singup } from "lib/apis";

export function MyDataPage() {
   const navigate = useNavigate();
   const [userEmail, setUserEmail] = useUserEmail();
   const [userName, setUserName] = useUserName();
   const [userToken, setUserToken] = useSetToken();

   const handleSubmit = async (e) => {
      e.preventDefault();

      const fullname = e.target.fullname.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const passwordConfirm = e.target.passwordConfirm.value;

      if (!fullname || !email || !password) return alert("Ingrese todos los datos");
      if (!emailRegex.test(email)) return alert("Por favor ingrese un email válido");
      if (password !== passwordConfirm) return alert("Las contraseñas no coinciden");

      const user = await singup({
         fullname,
         email,
         password,
      });

      const token = await getTokenUser(email, password);

      if (user && token) {
         setUserEmail({
            email,
         });

         setUserName({
            fullname,
         });

         setUserToken({
            token,
         });

         localStorage.setItem("auth_token", token);
         navigate("/");
      }
   };

   return (
      <div>
         <h1>My Data</h1>
         <form onSubmit={handleSubmit}>
            <InputComp label={"nombre"} name={"fullname"}></InputComp>
            <InputComp
               label={"email"}
               name={"email"}
               defaultValue={userEmail.email}
            ></InputComp>
            <InputComp
               label={"contraseña"}
               type={"password"}
               name={"password"}
               defaultValue={userName.fullname}
            ></InputComp>
            <InputComp
               label={"confirmar contraseña"}
               type={"password"}
               name={"passwordConfirm"}
            ></InputComp>
            <MainButton>Guardar</MainButton>
         </form>
      </div>
   );
}
