import React, { useEffect, useState } from "react";
import { PetCard } from "ui/pet-card/PetCard";
import { useGetMyPetsValue } from "hooks/atoms";

export function MyPetsComp() {
   const { myPets } = useGetMyPetsValue();
   const [pets, setPets] = useState([]);

   // useEffect(() => {
   //    setPets(myPets);
   // }, [myPets]);

   return (
      <div>
         <h1>Mis mascotas reportadas</h1>
         <div>
            {myPets[0] ? (
               myPets.map((pet) => (
                  <PetCard
                     key={pet.id}
                     petid={pet.id}
                     image={pet.petimage}
                     petname={pet.petname}
                     ubication={pet.ubication}
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
