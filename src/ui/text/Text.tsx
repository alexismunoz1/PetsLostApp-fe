import React from "react";

const TextStyles: any = {
   margin: "30px",
   fontFamily: "Poppins",
   fontWeight: "500",
   fontSize: "16px",
   textAlign: "center",
   textTransform: "uppercase",
   color: "#000000",
   maxWidth: "379px",
};

export function Text(props: { children: string }) {
   return <p style={TextStyles}>{props.children}</p>;
}
