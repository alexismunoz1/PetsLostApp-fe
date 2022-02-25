import React from "react";
import { Outlet } from "react-router-dom";
import css from "./layout.css";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";

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
