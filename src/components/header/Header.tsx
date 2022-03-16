import React from "react";
import logo from "assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useBurgerState } from "hooks/atoms";
import { BurgerMenu } from "ui/burger/Burger";

const headerStyele: any = {
   position: "fixed",
   top: "0",
   left: "0",
   width: "100%",
   zIndex: "10",
   padding: "13px 20px",
   display: "flex",
   flexDirection: "row",
   justifyContent: "space-between",
   background: "#ff6868",
};

export function Header() {
   const navigate = useNavigate();
   const [burgerState, setBurgerState] = useBurgerState();

   const handleClick = () => {
      navigate("/");
      setBurgerState(false);
   };

   return (
      <header style={headerStyele}>
         <img id="logo" src={logo} onClick={handleClick} />
         <BurgerMenu
            onBurger={burgerState}
            handleClick={() => setBurgerState(!burgerState)}
         />
      </header>
   );
}
