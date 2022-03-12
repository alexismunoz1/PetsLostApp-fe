import React, { useEffect } from "react";
import { useSetPetEditData } from "atoms/atoms";
import { getPetById } from "lib/apis";

export async function getDataPetEdit(petId, token) {
   const setPetEditData = useSetPetEditData();
   const pet = await getPetById(petId, token);

   setPetEditData({
      petid: petId,
      lat: pet.lat,
      lng: pet.lng,
      petimage: pet.petimage,
      petname: pet.petname,
      petstate: pet.petstate,
      ubication: pet.ubication,
   });
}
