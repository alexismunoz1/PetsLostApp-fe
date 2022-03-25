import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapboxSeach } from "lib/Mapbox";
import { Dropzone } from "lib/Dropzone";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";
import { createPet, getUserPets } from "lib/apis";
import {
   useSetMyPets,
   useTokenValue,
   useDropzoneAtomValue,
   useMapboxAtomValue,
   useCoordsValue,
} from "hooks/atoms";

const divStyle: any = {
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   marginBottom: "40px",
};

export function FormAddPet() {
   const navigate = useNavigate();
   const token = useTokenValue();
   const [petData, setPetData] = useState(null);
   const [petName, setPetName] = useState("");
   const { currentLat, currentLng } = useCoordsValue();
   const { mapLat, mapLng, mapUbication } = useMapboxAtomValue();
   const { dropImage } = useDropzoneAtomValue();
   const setMyPets = useSetMyPets();

   useEffect(() => {
      if (petName) {
         setPetData({
            ...petData,
            petname: petName,
         });
      }
   }, [petName]);

   useEffect(() => {
      if (dropImage) {
         setPetData({
            ...petData,
            petimage: dropImage,
         });
      }
   }, [dropImage]);

   useEffect(() => {
      if (mapUbication) {
         setPetData({
            ...petData,
            lat: mapLat,
            lng: mapLng,
            ubication: mapUbication,
         });
      }
   }, [mapUbication]);

   const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPetName(e.target.value);
   };

   const sendReport = async () => {
      // si todos los campos estan completos, se reporta la nueva mascota perdida
      // y se traen "myPtes" para actualizar el atom
      if (petData.petname && petData.petimage && petData.ubication) {
         const addPet = await createPet(petData, token);
         const myPets = await getUserPets(token);
         if (myPets && addPet) {
            setMyPets({ myPets });
            alert("La mascota ha sido creada correctamente");
            navigate("/my-pets");
         }
      } else {
         alert("Por favor, complete todos los campos");
      }
   };

   const cancelReport = () => {
      // cancela la creacion de la mascota perdida
      // y setea los valores a null, para evitar problemas
      const result = window.confirm("Desea cancelar la operación?");
      if (result) {
         setPetData({
            petname: null,
            petimage: null,
            lat: null,
            lng: null,
            ubication: null,
         });
         navigate("/");
      }
   };

   return (
      <div style={divStyle}>
         <MainInput label={"nombre de la mascota"} onChange={inputChangeHandler} />
         <Dropzone />
         <MapboxSeach initPetCoords={{ lat: currentLat, lng: currentLng }} />
         <MainButton color={"pink"} handleClick={sendReport}>
            Reportar como perdidx
         </MainButton>
         <MainButton color={"gray"} handleClick={cancelReport}>
            Cancelar
         </MainButton>
      </div>
   );
}
