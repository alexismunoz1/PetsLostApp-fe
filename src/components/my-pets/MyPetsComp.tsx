import React, { useEffect, useState } from "react";
import { PetCard } from "ui/pet-card/PetCard";
import { Text } from "ui/text/Text";
import { useGetMyPetsValue } from "hooks/atoms";

const contStyles: any = {
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
};

export function MyPetsComp() {
   const { myPets } = useGetMyPetsValue();
   const [pets, setPets] = useState([]);

   useEffect(() => {
      setPets(myPets);
   }, [pets]);

   return (
      <div>
         <div style={contStyles}>
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
               <Text>Aun no reportaste mascotas perdidas</Text>
            )}
         </div>
      </div>
   );
}
