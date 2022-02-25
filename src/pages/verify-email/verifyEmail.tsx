import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "ui/buttons";
import { InputComp } from "ui/inputs";
import { checkEmail } from "lib/apis";
import { useUserData } from "hooks/hooks";

function VerifyEmail() {
   const emailRegex =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
   const navigate = useNavigate();
   const [userData, setUserData] = useUserData();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      if (!email) return alert("Ingrese un email");
      if (!emailRegex.test(email)) return alert("Por favor ingrese un email válido");

      const response = await checkEmail(email);
      if (response) {
         setUserData({
            email: response.email,
            fullname: response.fullname,
         });

         navigate("/login");
      } else {
         console.log("Email does not exist");
      }
   };

   return (
      <div>
         <h1>Verify Email</h1>
         <form onSubmit={handleSubmit}>
            <InputComp label={"Emial"} name={"email"} />
            <MainButton>Siguiente</MainButton>
         </form>
      </div>
   );
}

export { VerifyEmail };
