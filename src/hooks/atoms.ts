import { recoilPersist } from "recoil-persist";
import {
   atom,
   RecoilState,
   selector,
   useRecoilState,
   useRecoilValue,
   useSetRecoilState,
} from "recoil";

const { persistAtom } = recoilPersist({
   key: "user_data",
   storage: localStorage,
});

// ClICK BURGER MENU
export const useBurgerState = () => useRecoilState(burgerStateAtom);
const burgerStateAtom: RecoilState<boolean> = atom({
   key: "burgerClick",
   default: false,
});

// EMAIL & FULLNAME & TOKEN
export const useUserDataAtom = () => useRecoilState(userDataAtom);
export const useUserDataAtomValue = () => useRecoilValue(userDataAtom);
export const useSetUserDataAtom = () => useSetRecoilState(userDataAtom);
const userDataAtom: RecoilState<{ [key: string]: string }> = atom({
   key: "userEmailAtom",
   default: {
      email: null,
      fullname: null,
      token: null,
   },
   effects_UNSTABLE: [persistAtom],
});

// GETER & SETER TOKEN
export const useTokenValue = () => useRecoilValue(userToken);
export const useSetToken = () => useSetRecoilState(userToken);
const userToken = selector({
   key: "getToken",
   get: ({ get }) => {
      const { token } = get(userDataAtom);
      return token;
   },
   set: ({ set, get }, newValue: string) => {
      set(userDataAtom, {
         ...get(userDataAtom),
         token: newValue,
      });
   },
});

// CURRENT CORDS USER
export const useUserCoords = () => useRecoilState(curretCoordsAtom);
export const useCoordsValue = () => useRecoilValue(curretCoordsAtom);
export const useSetUserCoords = () => useSetRecoilState(curretCoordsAtom);
const curretCoordsAtom: RecoilState<{ [key: string]: number }> = atom({
   key: "curretCoords",
   default: {
      currentLat: null,
      currentLng: null,
   },
});

// DATA DE LA MASCOTA QUE SE DESEA REPORTAR INFORMACION
export const useReportInfo = () => useRecoilState(reportInfoAtom);
export const useReportInfoValue = () => useRecoilValue(reportInfoAtom);
export const useSetReportInfo = () => useSetRecoilState(reportInfoAtom);
const reportInfoAtom: RecoilState<{ [key: string]: string }> = atom({
   key: "reportInfo",
   default: {
      petId: null,
      petname: null,
   },
});

// PETID DE LA MASCOTA A EDITAR
export const usePetIdEdit = () => useRecoilState(petIdEditAtom);
export const usePetIdEditValue = () => useRecoilValue(petIdEditAtom);
export const useSetPetIdEdit = () => useSetRecoilState(petIdEditAtom);
const petIdEditAtom: RecoilState<{ petId: string }> = atom({
   key: "petIdEdit",
   default: {
      petId: null,
   },
});

// IMAGEN DE DROPZONE
export const useDropzoneAtom = () => useRecoilState(dropzoneAtom);
export const useDropzoneAtomValue = () => useRecoilValue(dropzoneAtom);
export const useSetDropzoneAtom = () => useSetRecoilState(dropzoneAtom);
const dropzoneAtom: RecoilState<{ dropImage: any }> = atom({
   key: "dropzone",
   default: {
      dropImage: null,
   },
});

// COORDS Y UBICACION DE MAPBOX
export const useMapboxAtom = () => useRecoilState(mapboxAtom);
export const useMapboxAtomValue = () => useRecoilValue(mapboxAtom);
export const useSetMapboxAtom = () => useSetRecoilState(mapboxAtom);
const mapboxAtom: RecoilState<{ [key: string]: any }> = atom({
   key: "mapbox",
   default: {
      mapLat: null,
      mapLng: null,
      mapUbication: null,
   },
});

// DATA DE LA MASCOTA A EDITAR
export const usePetEditData = () => useRecoilState(petEditDataAtom);
export const usePetEditDataValue = () => useRecoilValue(petEditDataAtom);
export const useSetPetEditData = () => useSetRecoilState(petEditDataAtom);
const petEditDataAtom: RecoilState<{ [key: string]: string }> = atom({
   key: "petEditData",
   default: {
      petid: null,
      lat: null,
      lng: null,
      petimage: null,
      petname: null,
      petstate: null,
      ubication: null,
   },
});

// DATA DE LA MASCOTA A REPORTAR COMO PERDIDA
export const useCreatePet = () => useRecoilState(createPetDataAtom);
export const useCreatePetValue = () => useRecoilValue(createPetDataAtom);
export const useSetCreatePet = () => useSetRecoilState(createPetDataAtom);
const createPetDataAtom: RecoilState<{ [key: string]: string }> = atom({
   key: "createPetData",
   default: {
      lat: null,
      lng: null,
      petname: null,
      petimage: null,
      ubication: null,
   },
});

export const useGetMyPets = () => useRecoilState(myPetsAtom);
export const useGetMyPetsValue = () => useRecoilValue(myPetsAtom);
export const useSetMyPets = () => useSetRecoilState(myPetsAtom);
const myPetsAtom: RecoilState<{ myPets: any[] }> = atom({
   key: "myPets",
   default: {
      myPets: [],
   },
   effects_UNSTABLE: [persistAtom],
});
