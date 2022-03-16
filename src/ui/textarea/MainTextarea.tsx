import React from "react";

const boxStyle: any = {
   display: "flex",
   flexDirection: "column",
   minWidth: "339px",
};

const textareaStyle = {
   padding: "0 10px",
   height: "127px",
   fontFamily: "Poppins",
   fontWeight: "500",
   fontSize: "16px",
   color: "#000000",
   borderRadius: "4px",
   border: "2px solid #000000",
   background: "#ffffff",
};

const labelStyle: any = {
   margin: "0",
   fontFamily: "Poppins",
   fontWeight: "500",
   fontSize: "16px",
   color: "#000000",
   textTransform: "uppercase",
};

type TextareaProps = {
   label: string;
   name?: string;
   customValue?: string;
   placeholder?: string;
};

export function MainTextarea(props: TextareaProps) {
   const { label, name, customValue, placeholder } = props;

   return (
      <div style={boxStyle}>
         <label style={labelStyle}>{label}</label>
         <textarea
            style={textareaStyle}
            name={name ? name : ""}
            defaultValue={customValue ? customValue : ""}
            placeholder={placeholder ? placeholder : ""}
         ></textarea>
      </div>
   );
}
