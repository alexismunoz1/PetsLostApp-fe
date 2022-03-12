import React, { useEffect, useState } from "react";
import { MainButton } from "ui/buttons/MainButton";
import { useUserCords } from "atoms/atoms";
import { getPetsAround } from "lib/apis";
import { PetCardArround } from "ui/pet-card-arround/PetCardArround";

function Home() {
   const [cords, setCords] = useUserCords();
   const [pets, setPets] = useState([]);

   useEffect(() => {
      if (cords.currentLat && cords.currentLng) {
         getPets();
      }
   }, [cords]);

   const getPets = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
         const currentLat = position.coords.latitude;
         const currentLng = position.coords.longitude;
         setCords({
            currentLat,
            currentLng,
         });
      });

      const petsAround = await getPetsAround(cords.currentLat, cords.currentLng);

      if (petsAround) {
         setPets(petsAround);
      }
   };

   return (
      <div>
         <h1>Mascotas perdidas cerca tuyo</h1>
         <div>
            {pets[1] ? null : (
               <div>
                  <p>
                     Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
                     conocer tu ubicación.
                  </p>
                  <div onClick={getPets}>
                     <MainButton>Dar mi ubicación</MainButton>
                  </div>
               </div>
            )}
         </div>

         <div>
            {pets ? (
               pets.map((pet) => {
                  return (
                     <PetCardArround
                        key={pet.objectID}
                        petId={pet.objectID}
                        image={pet.petimage}
                        petname={pet.petname}
                        ubication={pet.ubication}
                     />
                  );
               })
            ) : (
               <p>No hay mascotas perdidas cerca tuyo</p>
            )}
         </div>
      </div>
   );
}

export { Home };
