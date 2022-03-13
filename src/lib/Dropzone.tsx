import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { MainButton } from "ui/buttons/MainButton";
import { useDropzoneAtom } from "atoms/atoms";
import defaultIcon from "assets/add_icon.svg";

const styleBox = {
   width: "333px",
   height: "auto",
   padding: "5px",
   border: "2px dashed #ccc",
};

// type dropProps = {
//    initPreview: any;
// };

export function Dropzone(props): JSX.Element {
   const { initPreview } = props;
   const [preview, setPreview] = useState(initPreview ? initPreview : defaultIcon);
   const [dropAtom, setDropAtom] = useDropzoneAtom();
   const { dropImage }: { dropImage: string } = dropAtom;

   useEffect(() => {
      if (dropImage) setPreview(dropImage);
   }, [dropImage]);

   const { getRootProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
         const reader: FileReader = new FileReader();
         reader.onload = (e: ProgressEvent<FileReader>) => {
            setDropAtom({ dropImage: e.target.result });
         };
         reader.readAsDataURL(acceptedFiles[0]);
      },
   });

   return (
      <div {...getRootProps()}>
         <img src={preview} style={styleBox} />
         <MainButton>Subir imagen</MainButton>
      </div>
   );
}
