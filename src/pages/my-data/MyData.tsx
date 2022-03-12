import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "ui/buttons/MainButton";
import { MainInput } from "ui/inputs/MainInput";
import { useUserToken, useUserEmail, useUserName } from "atoms/atoms";
import { emailRegex, getTokenUser, singup } from "lib/apis";

export function MyDataPage() {
   const navigate = useNavigate();
   const [userEmail, setUserEmail] = useUserEmail();
   const [userName, setUserName] = useUserName();
   const [userToken, setUserToken] = useUserToken();

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

         navigate("/");
      }
   };

   return (
      <div>
         <h1>My Data</h1>
         <form onSubmit={handleSubmit}>
            <MainInput
               label={"nombre"}
               name={"fullname"}
               defaultValue={userName.fullname}
            />
            <MainInput label={"email"} name={"email"} defaultValue={userEmail.email} />
            <MainInput label={"contraseña"} type={"password"} name={"password"} />
            <MainInput
               label={"confirmar contraseña"}
               type={"password"}
               name={"passwordConfirm"}
            />
            <MainButton>Guardar</MainButton>
         </form>
      </div>
   );
}
