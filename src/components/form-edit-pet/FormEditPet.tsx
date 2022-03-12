import React, { useState, useEffect } from "react";
import { MapboxSeach } from "lib/Mapbox";
import { Dropzone } from "lib/Dropzone";
import { usePetEditDataValue } from "atoms/atoms";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";

export function FormEditPet() {
   const petDataValue = usePetEditDataValue();
   const [petData, setPetData] = useState(petDataValue);
   const [formData, setFormData] = useState({});

   // useEffect(() => {
   //    console.log({ petDataValue });
   // }, [petDataValue]);

   function submitHandler(e) {
      e.preventDefault();
      const allData = {
         formData,
         texto: e.target.petname.value,
      };
   }

   return (
      <div>
         <form onSubmit={submitHandler}>
            <MainInput name={"petname"} label={"nombre"} defaultValue={petData.petname} />
            <Dropzone />
            <MapboxSeach />
            <MainButton>Guardar</MainButton>
         </form>
         <MainButton>Reportar como encontradx</MainButton>
         <p>DESPUBLICAR</p>
      </div>
   );
}
