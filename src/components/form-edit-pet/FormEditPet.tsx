import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapboxSeach } from "lib/Mapbox";
import { Dropzone } from "lib/Dropzone";
import { usePetEditData, useTokenValue } from "atoms/atoms";
import { editPet, updateStatePet } from "lib/apis";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";

export function FormEditPet() {
   const navigate = useNavigate();
   const [petData, setPetData] = usePetEditData();
   const { token } = useTokenValue();
   const [petName, setPetName] = useState("");

   useEffect(() => {
      setPetData({
         ...petData,
         petname: petName,
      });
   }, [petName]);

   const inputChangeHandler = (e) => {
      setPetName(e.target.value);
   };

   const updatePetData = () => {
      editPet(petData, token).then(() => {
         alert("Los datos de la mascota han sido actualizados correctamente");
         navigate("/");
      });
   };

   const updatePetState = () => {
      updateStatePet(petData.petid, token);
      alert('Se ha actualizado el estado de la mascota a "Encontradx"');
      navigate("/my-pets");
   };

   return (
      <div>
         <div>
            <MainInput
               name={"petname"}
               label={"nombre de la mascota"}
               onChange={inputChangeHandler}
               defaultValue={petData.petname}
            />
            <Dropzone />
            <MapboxSeach />
            <div onClick={updatePetData}>
               <MainButton>Guardar</MainButton>
            </div>
         </div>
         <div onClick={updatePetState}>
            <MainButton>Reportar como encontradx</MainButton>
         </div>
         <p>DESPUBLICAR</p>
      </div>
   );
}
