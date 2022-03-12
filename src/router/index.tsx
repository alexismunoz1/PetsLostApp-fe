import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout/Layout";
import { Home } from "pages/home/Home";
import { VerifyEmailPage } from "pages/verify-email/VerifyEmail";
import { LoginPage } from "pages/login/Login";
import { MyDataPage } from "pages/my-data/MyData";
import { ReportInfoPage } from "pages/report-info/ReportInfo";
import { MyPetsPage } from "pages/my-pets/MyPets";
import { EditPetPage } from "pages/edit-pet/EditPet";

export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-data" element={<MyDataPage />} />
            <Route path="/report-info" element={<ReportInfoPage />} />
            <Route path="/my-pets" element={<MyPetsPage />} />
            <Route path="/edit-pet" element={<EditPetPage />} />
         </Route>
      </Routes>
   );
}
