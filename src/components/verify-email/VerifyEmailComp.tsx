import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "ui/buttons/MainButton";
import { MainInput } from "ui/inputs/MainInput";
import { emailRegex, checkEmail } from "lib/apis";
import { useSetUserDataAtom } from "hooks/atoms";

export function VerifyEmailComp() {
   const navigate = useNavigate();
   const setUserData = useSetUserDataAtom();

   const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
      // verifica si el email existe, sino te manda a la pagina de registro "myData"
      e.preventDefault();
      const newEmail = e.target.email.value;
      if (!newEmail) return alert("Ingrese un email");
      if (!emailRegex.test(newEmail)) return alert("Por favor ingrese un email válido");

      const { email, fullname } = await checkEmail(newEmail);
      if (email && fullname) {
         //si existe el email
         setUserData({ email, fullname });
         navigate("/login");
      } else {
         //si no existe el email, propone registrarse
         const result = window.confirm("El emial no existe ¿desea registrarse?");
         if (result) {
            setUserData({
               email: newEmail,
            });
            navigate("/my-data");
         }
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <MainInput label={"Email"} name={"email"} />
            <MainButton>Siguiente</MainButton>
         </form>
      </div>
   );
}
