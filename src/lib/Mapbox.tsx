import React, { useState, useEffect } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MainButton } from "ui/buttons/MainButton";
import { useSetMapboxAtom } from "atoms/atoms";

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

export function MapboxSeach(props?: any): JSX.Element {
   const { initPetCoords } = props;
   const setDataMap = useSetMapboxAtom();
   const [query, setQuery] = useState("");
   const [coords, setCoords] = useState(dafultCoords);

   useEffect(() => {
      if (initPetCoords) setCoords([initPetCoords.lng, initPetCoords.lat]);
   }, []);

   async function search() {
      const data = await fetch(
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
         >
            <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
               <Feature coordinates={coords} />
            </Layer>
         </Map>
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

// const { currentLat, currentLng } = useCordsValue();
// if (!petData.lat && currentLat) {
// setCoords([currentLng, currentLat]);
// console.log("hay current lat y no pet lat");
// }
