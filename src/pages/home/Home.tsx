import React, { useEffect } from "react";
import { ShowPetsArround } from "components/pets-arround/PetsArround";
import { useTokenValue, useGetMyPets } from "hooks/atoms";
import { getUserPets } from "lib/apis";
import { Title } from "ui/title/Title";

export function HomePage() {
   const token = useTokenValue();
   const [{ myPets }, setMyPets] = useGetMyPets();

   useEffect(() => {
      // si hay token y no hay mascotas, deberia traer "mis mascotas"
      // para hacer un solo request y para tener precargada la data
      if (token && !myPets[0]) {
         getUserPets(token).then((myPets) => {
            setMyPets({ myPets });
         });
      }
   }, []);

   return (
      <section>
         <Title>Mascotas perdidas cerca tuyo</Title>
         <ShowPetsArround />
      </section>
   );
}
