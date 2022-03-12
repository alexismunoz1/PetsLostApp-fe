import React, { useState, useEffect } from "react";
import { MapboxSeach } from "lib/Mapbox";
import { Dropzone } from "lib/Dropzone";
import { usePetEditData, useTokenValue } from "atoms/atoms";
import { editPet } from "lib/apis";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";

export function FormEditPet() {
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

   const handleClick = () => {
      editPet(petData, token).then((r) => {
         console.log(r);
      });
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
            <div onClick={handleClick}>
               <MainButton>Guardar</MainButton>
            </div>
         </div>
         <MainButton>Reportar como encontradx</MainButton>
         <p>DESPUBLICAR</p>
      </div>
   );
}
