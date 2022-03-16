import React from "react";
import { GetTokenComp } from "components/get-token/GetToken";
import { Title } from "ui/title/Title";

export function LoginPage() {
   return (
      <section>
         <Title>Login page</Title>

         <GetTokenComp />
      </section>
   );
}
