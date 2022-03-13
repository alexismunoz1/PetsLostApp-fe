import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";
import { Dropzone } from "lib/Dropzone";
import { MapboxSeach } from "lib/Mapbox";
import { editPet, updateStatePet, deletePet } from "lib/apis";
import {
   usePetEditData,
   useTokenValue,
   useDropzoneAtomValue,
   useMapboxAtomValue,
} from "atoms/atoms";

export function FormEditPet(): JSX.Element {
   const navigate = useNavigate();
   const [petData, setPetData] = usePetEditData();
   const { mapLat, mapLng, mapUbication } = useMapboxAtomValue();
   const { dropImage }: { dropImage: string } = useDropzoneAtomValue();
   const { token }: { token: string } = useTokenValue();
   const [petName, setPetName] = useState(null);

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

   const inputChangeHandler = (e) => {
      setPetName(e.target.value);
   };

   const updatePetData = () => {
      editPet(petData, token).then(() => {
         alert("Los datos de la mascota han sido actualizados correctamente");
         navigate("/my-pets");
      });
   };

   const updatePetState = () => {
      updateStatePet(petData.petid, token).then(() => {
         alert("Mascota reportada");
         navigate("/");
      });
   };

   const cancelUpdate = () => {
      window.confirm("Desea cancelar la operación?") && navigate("/my-pets");
   };

   const deletePetData = () => {
      const ressult = window.confirm("Desea eliminar el reporte?");
      if (ressult) {
         deletePet(petData.petid, token);
         alert("El reporte se elimininó correctamente");
         navigate("/my-pets");
      }
   };

   return (
      <div>
         <MainInput
            name={"petname"}
            label={"nombre de la mascota"}
            onChange={inputChangeHandler}
            defaultValue={petData.petname}
         />
         <Dropzone initPreview={petData.petimage} />
         <MapboxSeach initPetCoords={{ lat: petData.lat, lng: petData.lng }} />
         <div onClick={updatePetData}>
            <MainButton>Guardar</MainButton>
         </div>
         <div onClick={updatePetState}>
            <MainButton>Reportar como encontradx</MainButton>
         </div>
         <div onClick={cancelUpdate}>
            <MainButton>Cancelar</MainButton>
         </div>
         <p onClick={deletePetData}>DESPUBLICAR</p>
      </div>
   );
}
