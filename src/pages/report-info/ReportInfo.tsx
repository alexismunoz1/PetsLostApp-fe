import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";
import { MainTextarea } from "ui/textarea/MainTextarea";
import { useReportInfoValue, useTokenValue } from "atoms/atoms";
import { reportInfo } from "lib/apis";

export function ReportInfoPage() {
   const navigate = useNavigate();
   const petData = useReportInfoValue();
   const token = useTokenValue();

   const handleSubmit = (e) => {
      e.preventDefault();
      const fullname = e.target.fullname.value;
      const phonenumber = e.target.phonenumber.value;
      const report = e.target.report.value;

      if (!fullname || !phonenumber || !report) {
         return alert("Todos los campos son obligatorios");
      } else {
         reportInfo({
            petid: petData.petId,
            fullname,
            phonenumber,
            report,
            token: token.token,
         });

         alert("Reporte enviado");
         navigate("/");
      }
   };

   const handleClick = () => {
      const result = window.confirm("Desea cancelar el reporte?");
      if (result == true) {
         navigate("/");
      }
   };

   return (
      <div>
         <h1>Reportar información de {petData.petname}</h1>
         <form onSubmit={handleSubmit}>
            <MainInput name={"fullname"} label={"tu nombre"} />
            <MainInput name={"phonenumber"} label={"tu telefono"} />
            <MainTextarea name={"report"} label={"donde lo viste?"} />
            <MainButton>Enviar</MainButton>
         </form>
         <div onClick={handleClick}>
            <MainButton>Cancelar</MainButton>
         </div>
      </div>
   );
}
