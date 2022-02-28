import React from "react";
import { Outlet } from "react-router-dom";
import css from "./index.css";
import { Header } from "components/header/Header";
import { Menu } from "components/menu/Menu";

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
