import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { useTokenValue, useSetReportInfo } from "hooks/atoms";

type petProps = {
   petId: string;
   image: string;
   petname: string;
   ubication: string;
};

export function PetCardArround(props: petProps) {
   const { image, petname, ubication, petId } = props;
   const token = useTokenValue();
   const navigate = useNavigate();
   const setReportInfo = useSetReportInfo();

   const handleClick = () => {
      if (token) {
         setReportInfo({
            petId,
            petname,
         });
         navigate("/report-info");
      } else {
         navigate("/verify-email");
      }
   };

   return (
      <div className={css.card}>
         <img className={css["card__image"]} src={image} />
         <div className={css["card__info-cont"]}>
            <div className={css["card__info"]}>
               <h2 className={css["card__name"]}>{petname}</h2>
               <p className={css["card__ubication"]}>{ubication}</p>
            </div>
            <p className={css["card__report-info"]} onClick={handleClick}>
               Reportar <br /> información
            </p>
         </div>
      </div>
   );
}
