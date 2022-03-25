import React, { useState, useEffect } from "react";
import css from "./index.css";
import iconEdit from "assets/iconEdit.svg";
import { useNavigate } from "react-router-dom";
import { useSetPetEditData, useTokenValue } from "hooks/atoms";
import { getPetById } from "lib/apis";

type PetData = {
   petid: string;
   image: string;
   petname: string;
   ubication: string;
   state: string;
};

const stateStyle: any = {
   fontFamily: "Poppins",
   fontWeight: "500",
   fontSize: "16px",
   textTransform: "uppercase",
};

export function PetCard(props: PetData) {
   const { petid, image, petname, ubication, state } = props;
   const token = useTokenValue();
   const navigate = useNavigate();
   const setPetEditData = useSetPetEditData();
   const [colorState, setColorState] = useState(stateStyle);

   useEffect(() => {
      if (state == "lost") setColorState({ ...colorState, color: "#FF3A3A" });
      if (state == "found") setColorState({ ...colorState, color: "#49a223" });
   }, []);

   const handleClick = () => {
      getPetById(petid, token).then((pet) => {
         setPetEditData({
            petid,
            lat: pet.lat,
            lng: pet.lng,
            petimage: pet.petimage,
            petname: pet.petname,
            petstate: pet.petstate,
            ubication: pet.ubication,
         });
         navigate("/edit-pet");
      });
   };

   return (
      <div className={css.card}>
         <img className={css["card__image"]} src={image} />
         <div className={css["card__info-cont"]}>
            <div className={css["card__info"]}>
               <h2 className={css["card__name"]}>{petname}</h2>
               <p className={css["card__ubication"]}>{ubication}</p>
               <p style={colorState}>{state}</p>
            </div>
            <img className={css["card__icon"]} onClick={handleClick} src={iconEdit} />
         </div>
      </div>
   );
}
