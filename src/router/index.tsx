import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout/Layout";
import { Home } from "pages/home/Home";
import { VerifyEmail } from "pages/verify-email/VerifyEmail";
import { LoginPage } from "pages/login/Login";
import { MyDataPage } from "pages/my-data/MyData";

function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-data" element={<MyDataPage />} />
         </Route>
      </Routes>
   );
}

export { AppRoutes };
