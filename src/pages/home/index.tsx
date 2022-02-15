import React from "react";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";

function Home() {
   return (
      <div>
         <h1>Hacé tu busqueda</h1>
         <TextField type="text" placeholder="Buscar" />
         <MainButton>Buscar</MainButton>
      </div>
   );
}

export { Home };
