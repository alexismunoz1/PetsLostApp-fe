import React from "react";

const TitleSyles: any = {
   margin: "30px",
   fontFamily: "Poppins",
   fontWeight: "bold",
   textAlign: "center",
   fontSize: "40px",
   lineHeight: "60px",
   color: "#000000",
   maxWidth: "379px",
};

export function Title(props: { children: any }) {
   return <h1 style={TitleSyles}>{props.children}</h1>;
}
