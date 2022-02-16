import React from "react";
import { MainButton } from "ui/buttons";
import { Link } from "react-router-dom";

function Home() {
   return (
      <div>
         <h1>Mascotas perdidas cerca tuyo</h1>
         <p>
            Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer
            tu ubicación.
         </p>

         <MainButton>Dar mi ubicación</MainButton>
      </div>
   );
}

export { Home };
