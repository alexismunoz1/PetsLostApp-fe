import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { MainButton } from "ui/buttons/MainButton";
import { usePetEditData } from "atoms/atoms";
import addIcon from "assets/add_icon.svg";

const dropImage = {
   height: "142px",
   border: "2px dashed #ccc",
   width: "333px",
};

export function Dropzone() {
   const [petData, setPetData] = usePetEditData();
   const [preview, setPreview] = useState(addIcon);

   useEffect(() => {
      if (petData.petimage) {
         setPreview(petData.petimage);
      }
   }, [petData.petimage]);

   const { getRootProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
         const reader = new FileReader();
         reader.onload = (e) => {
            setPetData({
               ...petData,
               petimage: e.target.result,
            });
         };
         reader.readAsDataURL(acceptedFiles[0]);
      },
   });

   return (
      <div {...getRootProps()}>
         <img src={preview} style={dropImage} />
         <MainButton>Subir imagen</MainButton>
      </div>
   );
}
