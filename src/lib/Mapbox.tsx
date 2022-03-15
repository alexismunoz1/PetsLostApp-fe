import React, { useState, useEffect } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MainButton } from "ui/buttons/MainButton";
import { useSetMapboxAtom } from "hooks/atoms";

const Map = ReactMapboxGl({
   accessToken:
      "pk.eyJ1IjoiYWxleGlzbXVub3oxIiwiYSI6ImNrdzVqb3loODJxYXAycHBhdjVzZWtpY3QifQ.V-0kAfHQOapkN5HrZdmUUA",
});
const dafultCoords: [number, number] = [-64.5965932, -34.8403116];
const boxStyles: { [key: string]: string } = {
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

type MapboxProps = {
   initPetCoords?: { lat: any; lng: any };
};

export function MapboxSeach(props: MapboxProps) {
   const { initPetCoords } = props;
   const setDataMap = useSetMapboxAtom();
   const [query, setQuery] = useState("");
   const [coords, setCoords] = useState(dafultCoords);

   useEffect(() => {
      // si el usuario dio su ubicación se inicializa el mapa con esa ubicación
      if (initPetCoords.lat) setCoords([initPetCoords.lng, initPetCoords.lat]);
   }, []);

   async function search() {
      const data: Promise<Response> = await fetch(
         `https://us1.locationiq.com/v1/search.php?key=pk.bf4604bc2b3ea328e732de26a4387fa9&q=${query}&format=json`
      ).then((r) => r.json());

      setCoords([data[0].lon, data[0].lat]);
      setDataMap({
         mapLat: parseFloat(data[0].lat),
         mapLng: parseFloat(data[0].lon),
         mapUbication: data[0].display_name,
      });
   }

   function inputChangeHandler(e) {
      setQuery(e.target.value);
      if (e.key == "Enter") search();
   }

   return (
      <div>
         <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
               height: "300px",
               width: "300px",
            }}
            zoom={[14]}
            center={coords}
            movingMethod="easeTo"
         ></Map>
         <div>
            <input
               type="text"
               onChange={inputChangeHandler}
               onKeyDown={inputChangeHandler}
               value={query}
               style={boxStyles}
            />
            <div onClick={search}>
               <MainButton>Buscar</MainButton>
            </div>
            <p>
               Buscá un punto de referencia para reportar a tu mascota. Puede ser una
               dirección, un barrio o una ciudad.
            </p>
         </div>
      </div>
   );
}
