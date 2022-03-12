import React, { useEffect, useState } from "react";
import css from "./index.css";
import { getUserPets } from "lib/apis";
import { useTokenValue } from "atoms/atoms";
import { PetCard } from "ui/pet-card/PetCard";

export function MyPetsPage() {
   const { token } = useTokenValue();
   const [pets, setPets] = useState([]);

   useEffect(() => {
      getUserPets(token).then((res) => {
         setPets(res);
      });
   }, []);

   return (
      <div>
         <h1>Mis mascotas reportadas</h1>
         <div>
            {pets[0] ? (
               pets.map((pet) => (
                  <PetCard
                     key={pet.id}
                     petid={pet.id}
                     image={pet.petimage}
                     petname={pet.petname}
                     ubication={pet.ubicación}
                     state={pet.petstate}
                  />
               ))
            ) : (
               <p>Aun no reportaste mascotas perdidas</p>
            )}
         </div>
      </div>
   );
}
