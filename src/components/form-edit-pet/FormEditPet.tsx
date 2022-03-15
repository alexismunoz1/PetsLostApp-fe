import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";
import { Dropzone } from "lib/Dropzone";
import { MapboxSeach } from "lib/Mapbox";
import { editPet, updateStatePet, deletePet, getUserPets } from "lib/apis";
import {
   usePetEditData,
   useTokenValue,
   useDropzoneAtomValue,
   useMapboxAtomValue,
   useSetMyPets,
} from "hooks/atoms";

export function FormEditPet(): JSX.Element {
   const navigate = useNavigate();
   const token = useTokenValue();
   const [petData, setPetData] = usePetEditData();
   const [petName, setPetName] = useState("");
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

   const inputChangeHandler = (e) => {
      setPetName(e.target.value);
   };

   const updatePetData = async () => {
      // actualiza la data de la mascota
      // y se actualizan mis mascotas
      const edit = await editPet(petData, token);
      const myPets = await getUserPets(token);
      if (myPets && edit) {
         setMyPets({ myPets });
         alert("Los datos de la mascota han sido actualizados correctamente");
         navigate("/my-pets");
      }
   };

   const updatePetState = async () => {
      // actualiza el estado de la mascota
      // y se actualizan mis mascotas
      const updateState = await updateStatePet(petData.petid, token);
      const myPets = await getUserPets(token);

      if (myPets && updateState) {
         setMyPets({ myPets });
         alert("Mascota reportada");
         navigate("/my-pets");
      }
   };

   const cancelUpdate = () => {
      window.confirm("Desea cancelar la operación?") && navigate("/my-pets");
   };

   const deletePetData = async () => {
      // elimina la mascota
      const result = window.confirm("Desea eliminar el reporte?");
      const deleted = await deletePet(petData.petid, token);
      const myPets = await getUserPets(token);

      if (result && myPets && deleted) {
         setMyPets({ myPets });
         alert("El reporte se elimininó correctamente");
         navigate("/my-pets");
      }
   };

   return (
      <div>
         <h1>Editar mascota perdida</h1>
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
