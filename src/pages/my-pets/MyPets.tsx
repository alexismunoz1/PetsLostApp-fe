import React from "react";
import { MyPetsComp } from "components/my-pets/MyPetsComp";
import { Title } from "ui/title/Title";

export function MyPetsPage() {
   return (
      <section>
         <Title>Mis mascotas reportadas</Title>
         <MyPetsComp />
      </section>
   );
}
