import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout/layout";
import { Home } from "pages/home/home";
import { VerifyEmail } from "pages/verify-email/verifyEmail";
import { UserData } from "pages/user-data/userData";
import { LoginPage } from "pages/login/login";

function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/user-data" element={<UserData />} />
            <Route path="/login" element={<LoginPage />} />
         </Route>
      </Routes>
   );
}

export { AppRoutes };
