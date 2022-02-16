import React from "react";
import { Outlet } from "react-router-dom";
import css from "./layout.css";
import { Header } from "components/header";

function Layout() {
   return (
      <div>
         <Header></Header>
         <Outlet />
      </div>
   );
}

export { Layout };
