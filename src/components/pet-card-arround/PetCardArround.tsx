import React from "react";
import css from "./index.css";

type petProps = {
   image: string;
   petname: string;
   ubication: string;
};

export function PetCardArround(props: petProps) {
   const { image, petname, ubication } = props;

   const handleClick = (e) => {
      // verificar si el usuario esta logueado
      // si no lo esta, redireccionarlo a verify-email
      // si lo esta, redireccionarlo a report-pet
      // guardar el la key de la card y el petname
   };

   return (
      <div className="card">
         <img className="card__image" src={image} />
         <div className="card__info-cont">
            <div className="card__info">
               <h2 className="card__name">{petname}</h2>
               <p className="card__ubication">{ubication}</p>
            </div>
            <p className="card__report-info" onClick={handleClick}>
               Reportar información
            </p>
         </div>
      </div>
   );
}
