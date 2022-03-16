import React, { useState, useEffect } from "react";

const defaultStyles = {
   margin: "10px",
   width: "339px",
   height: "50px",
   border: "none",
   cursor: "pointer",
   borderRadius: "4px",
   color: "#000000",
   fontSize: "16px",
   fontWeight: "bold",
   fontFamily: "Poppins",
   background: "#FF9DF5",
};

type BtnProps = {
   children: string;
   handleClick?: () => void;
   color?: "green" | "gray" | "pink";
};

export function MainButton(props: BtnProps) {
   const { children, handleClick, color } = props;
   const [colorBtn, setColorBtn] = useState(defaultStyles);

   useEffect(() => {
      if (color == "gray") setColorBtn({ ...colorBtn, background: "#CDCDCD" });
      if (color == "pink") setColorBtn({ ...colorBtn, background: "#FF9DF5" });
      if (color == "green") setColorBtn({ ...colorBtn, background: "#97EA9F" });
   }, []);

   return (
      <button style={colorBtn} onClick={handleClick}>
         {children}
      </button>
   );
}
