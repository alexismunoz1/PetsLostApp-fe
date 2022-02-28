import React, { useEffect, useState } from "react";
import { MainButton } from "ui/buttons/MainButton";
import { useUserCords } from "hooks/hooks";
import { getPetsAround } from "lib/apis";
import { PetCardArround } from "components/pet-card-arround/PetCardArround";

function Home() {
   const [pets, setPets] = useState([]);
   const [cords, setCords] = useUserCords();

   useEffect(() => {
      if (cords.lat && cords.lng) {
         getPets();
      }
   }, [cords]);

   const getPets = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
         const lat = position.coords.latitude;
         const lng = position.coords.longitude;
         setCords({
            lat,
            lng,
         });
      });

      const petsAround = await getPetsAround(cords.lat, cords.lng);

      if (petsAround) {
         setPets(petsAround);
      }
   };

   return (
      <div>
         <h1>Mascotas perdidas cerca tuyo</h1>
         <p>
            Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer
            tu ubicación.
         </p>
         <div onClick={getPets}>
            <MainButton>Dar mi ubicación</MainButton>
         </div>
         <div>
            {pets ? (
               pets.map((pet) => {
                  return (
                     <PetCardArround
                        key={pet.objectID}
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
