import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapboxSeach } from "lib/Mapbox";
import { Dropzone } from "lib/Dropzone";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";
import { createPet } from "lib/apis";
import {
   useCreatePet,
   useTokenValue,
   useDropzoneAtomValue,
   useMapboxAtomValue,
} from "atoms/atoms";

export function FormAddPet(): JSX.Element {
   const navigate = useNavigate();
   const { token } = useTokenValue();
   const { mapLat, mapLng, mapUbication } = useMapboxAtomValue();
   const { dropImage }: { dropImage: string } = useDropzoneAtomValue();
   const [petData, setPetData] = useCreatePet();
   const [petName, setPetName] = useState("");

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

   const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPetName(e.target.value);
   };

   const sendReport = () => {
      console.log({ petData });
      if (petData.petname && petData.petimage && petData.ubication) {
         createPet(petData, token).then(() => {
            alert("La mascota ha sido creada correctamente");
            navigate("/my-pets");
         });
      } else {
         alert("Por favor, complete todos los campos");
      }
   };

   const cancelReport = () => {
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
      <div>
         <MainInput label={"nombre de la mascota"} onChange={inputChangeHandler} />
         <Dropzone />
         <MapboxSeach />
         <div onClick={sendReport}>
            <MainButton>Reportar como perdidx</MainButton>
         </div>
         <div onClick={cancelReport}>
            <MainButton>Cancelar</MainButton>
         </div>
      </div>
   );
}
