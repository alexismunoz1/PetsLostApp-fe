import React from "react";
import css from "./index.css";
import iconEdit from "assets/iconEdit.svg";
import { useNavigate } from "react-router-dom";

type PetData = {
   petid: string;
   image: string;
   petname: string;
   ubication: string;
   state: string;
};

export function PetCard(props: PetData) {
   const { petid, image, petname, ubication, state } = props;
   const navigate = useNavigate();

   return (
      <div className={css.card}>
         <img className={css["card__image"]} src={image} />
         <div className={css["card__info-cont"]}>
            <div className={css["card__info"]}>
               <h2 className={css["card__name"]}>{petname}</h2>
               <p className={css["card__ubication"]}>{ubication}</p>
               <p className={css["card__state"]}>{state}</p>
            </div>
            <img className={css["card__icon"]} src={iconEdit} />
         </div>
      </div>
   );
}