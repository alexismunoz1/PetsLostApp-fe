import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout";
import { Home } from "pages/home/";
import { VerifyEmail } from "pages/verify-email/";
import { UserData } from "pages/user-data/";

function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="user-data" element={<UserData />} />
         </Route>
      </Routes>
   );
}

export { AppRoutes };
