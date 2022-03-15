import React, { useEffect } from "react";
import { ShowPetsArround } from "components/pets-arround/PetsArround";
import { useTokenValue, useGetMyPets } from "hooks/atoms";
import { getUserPets } from "lib/apis";

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
         <ShowPetsArround />
      </section>
   );
}

// EN HOME
// si NO hay token, no deberia hacer nada -V
// si hay token pero ya hay mascotas en el atom, NO deberia hacer un request -V

// EN REPORT PET
// si se crea una nueva mascota, deberia hacer un request para traer "mis mascotas"

// EN EDIT PET
// si se modifica una mascota, deberia hacer un request para traer "mis mascotas"
