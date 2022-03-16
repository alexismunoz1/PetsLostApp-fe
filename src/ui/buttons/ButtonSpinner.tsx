import React, { useState, useEffect } from "react";
import { Spinner } from "ui/spinner/Spinner";

const defaultStyles = {
   margin: "10px",
   width: "339px",
   height: "50px",
   border: "none",
   cursor: "pointer",
   borderRadius: "4px",
   color: "#111",
   fontSize: "16px",
   fontWeight: "bold",
   fontFamily: "Poppins",
   background: "#FF9DF5",
};

type BtnProps = {
   children: any;
   handleClick?: () => void;
   color?: "green" | "gray" | "pink";
};

export function ButtonSpinner(props: BtnProps) {
   let { children, handleClick, color } = props;
   const [colorBtn, setColorBtn] = useState(defaultStyles);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (color == "gray") setColorBtn({ ...colorBtn, background: "#CDCDCD" });
      if (color == "pink") setColorBtn({ ...colorBtn, background: "#FF9DF5" });
      if (color == "green") setColorBtn({ ...colorBtn, background: "#97EA9F" });
   }, []);

   const handleClickBtn = () => {
      setLoading(!loading);
      handleClick && handleClick();
   };

   return (
      <button style={colorBtn} onClick={() => handleClickBtn()}>
         {loading ? <Spinner /> : children}
      </button>
   );
}
