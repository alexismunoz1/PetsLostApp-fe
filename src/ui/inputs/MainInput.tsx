import React from "react";

const divStyle: any = {
   display: "flex",
   flexDirection: "column",
   margin: "10px",
};

const inputStyles = {
   padding: "0 10px",
   height: "50px",
   fontFamily: "Poppins",
   fontWeight: "500",
   fontSize: "16px",
   color: "#000000",
   borderRadius: "4px",
   border: "2px solid #000000",
   background: "#ffffff",
};

const labelStyles: any = {
   margin: "0",
   fontFamily: "Poppins",
   fontWeight: "500",
   fontSize: "16px",
   color: "#000000",
   textTransform: "uppercase",
};

type MainInputProps = {
   label?: string;
   type?: string;
   name?: string;
   value?: string;
   placeholder?: string;
   defaultValue?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function MainInput(props: MainInputProps) {
   const { label, type, name, value, placeholder, defaultValue, onChange } = props;

   return (
      <div style={divStyle}>
         <label style={labelStyles}> {label ? label : ""} </label>
         <input
            style={inputStyles}
            type={type ? type : "text"}
            name={name}
            value={value}
            placeholder={placeholder ? placeholder : ""}
            defaultValue={defaultValue ? defaultValue : ""}
            onChange={onChange}
         ></input>
      </div>
   );
}
