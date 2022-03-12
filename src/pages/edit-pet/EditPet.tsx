import React from "react";
import css from "./index.css";
import { FormEditPet } from "components/form-edit-pet/FormEditPet";

export function EditPetPage() {
   return (
      <div>
         <h1>Editar mascota perdida</h1>
         <FormEditPet />
      </div>
   );
}
