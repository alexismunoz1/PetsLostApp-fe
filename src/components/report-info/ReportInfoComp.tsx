import React from "react";
import { useNavigate } from "react-router-dom";
import { MainInput } from "ui/inputs/MainInput";
import { MainButton } from "ui/buttons/MainButton";
import { MainTextarea } from "ui/textarea/MainTextarea";
import { useReportInfoValue, useTokenValue } from "hooks/atoms";
import { reportInfo } from "lib/apis";

export function ReportInfoComp() {
   const navigate = useNavigate();
   const token = useTokenValue();
   const { petId, petname } = useReportInfoValue();

   const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      // reporta informacion al dueño de la mascota perdida
      e.preventDefault();
      const fullname = e.target.fullname.value;
      const phonenumber = e.target.phonenumber.value;
      const report = e.target.report.value;

      if (!fullname || !phonenumber || !report) {
         return alert("Todos los campos son obligatorios");
      } else {
         reportInfo({
            petid: petId,
            fullname,
            phonenumber,
            report,
            token,
         });
         alert("Reporte enviado");
         navigate("/");
      }
   };

   const cancelReport = () => {
      const result = window.confirm("Desea cancelar el reporte?");
      result && navigate("/");
   };

   return (
      <div>
         <h1>Reportar información de {petname}</h1>
         <form onSubmit={handleSubmit}>
            <MainInput name={"fullname"} label={"tu nombre"} />
            <MainInput name={"phonenumber"} label={"tu telefono"} />
            <MainTextarea name={"report"} label={"donde lo viste?"} />
            <MainButton>Enviar</MainButton>
         </form>
         <div onClick={cancelReport}>
            <MainButton>Cancelar</MainButton>
         </div>
      </div>
   );
}
