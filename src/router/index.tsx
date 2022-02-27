import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout/layout";
import { Home } from "pages/home/home";
import { VerifyEmail } from "pages/verify-email/verifyEmail";
import { LoginPage } from "pages/login/login";
import { MyDataPage } from "pages/my-data/myData";

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
