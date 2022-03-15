import React, { useEffect, useState } from "react";
import { PetCardArround } from "ui/pet-card-arround/PetCardArround";
import { MainButton } from "ui/buttons/MainButton";
import { useUserCoords } from "hooks/atoms";
import { getPetsAround } from "lib/apis";

export function ShowPetsArround() {
   const [cords, setCoords] = useUserCoords();
   const [pets, setPets] = useState([]);

   useEffect(() => {
      // cuando el usuario da sus cordenadas, se ejecuta getPets()
      cords.currentLat && cords.currentLng && getPets();
   }, [cords]);

   const getPets = async () => {
      // trae las mascotas perdidas cerca de las coordenadas del usuario
      const petsAround: [object] = await getPetsAround(
         cords.currentLat,
         cords.currentLng
      );
      petsAround && setPets(petsAround);
   };

   const getCoords = () => {
      // obtiene las coordenadas del usuario
      navigator.geolocation.getCurrentPosition((position) => {
         setCoords({
            currentLat: position.coords.latitude,
            currentLng: position.coords.longitude,
         });
      });
   };

   return (
      <div>
         <h1>Mascotas perdidas cerca tuyo</h1>
         <div>
            {pets ? (
               pets.map((pet) => (
                  <PetCardArround
                     key={pet.objectID}
                     petId={pet.objectID}
                     image={pet.petimage}
                     petname={pet.petname}
                     ubication={pet.ubication}
                  />
               ))
            ) : (
               <p>No hay mascotas perdidas cerca tuyo</p>
            )}
         </div>
         <div>
            {pets[0] ? null : (
               <div>
                  <p>
                     Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
                     conocer tu ubicación.
                  </p>
                  <div onClick={getCoords}>
                     <MainButton>Dar mi ubicación</MainButton>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
