import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { MainButton } from "ui/buttons/MainButton";
import { useDropzoneAtom } from "hooks/atoms";
import defaultIcon from "assets/add_icon.svg";

const styleBox: any = {
   width: "333px",
   height: "auto",
   padding: "5px",
   border: "2px dashed #ccc",
   display: "flex",
   flexDirection: "column",
   margin: "0 auto",
};

type dropProps = {
   initPreview?: string;
};

export function Dropzone(props: dropProps) {
   const { initPreview } = props;
   const [preview, setPreview] = useState(initPreview ? initPreview : defaultIcon);
   const [dropAtom, setDropAtom] = useDropzoneAtom();

   useEffect(() => {
      // actualiza el preview de la imagen
      if (dropAtom.dropImage) setPreview(dropAtom.dropImage);
   }, [dropAtom.dropImage]);

   const { getRootProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
         const reader: FileReader = new FileReader();
         reader.onload = (e: ProgressEvent<FileReader>) => {
            // se obtiene la url de la imagen
            setDropAtom({ dropImage: e.target.result });
         };
         reader.readAsDataURL(acceptedFiles[0]);
      },
   });

   return (
      <div {...getRootProps()}>
         <img src={preview} style={styleBox} />
         <MainButton color={"green"}>Agregar/cambiar imagen</MainButton>
      </div>
   );
}
