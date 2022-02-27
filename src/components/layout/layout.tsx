import React from "react";
import { Outlet } from "react-router-dom";
import css from "./layout.css";
import { Header } from "components/header/header";
import { Menu } from "components/menu/menu";

function Layout() {
   return (
      <div>
         <Header />
         <Outlet />
         <Menu />
      </div>
   );
}

export { Layout };
