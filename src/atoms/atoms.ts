import { recoilPersist } from "recoil-persist";
import {
   atom,
   useRecoilState,
   useRecoilValue,
   selector,
   useSetRecoilState,
} from "recoil";

// ClICK BURGER MENU
const burgerStateAtom = atom({
   key: "burgerClick",
   default: false,
});

export const useBurgerState = () => useRecoilState(burgerStateAtom);

// EMAIL
const { persistAtom } = recoilPersist({
   key: "user_data",
   storage: localStorage,
});

const userEmailAtom = atom({
   key: "userEmailAtom",
   default: {
      email: null,
   },
   effects_UNSTABLE: [persistAtom],
});

export const useUserEmail = () => useRecoilState(userEmailAtom);
export const useSetUserEmail = () => useSetRecoilState(userEmailAtom);
export const useUserEmailValue = () => useRecoilValue(userEmailAtom);

// FULLNAME

const userNameAtom = atom({
   key: "userNameAtom",
   default: {
      fullname: null,
   },
   effects_UNSTABLE: [persistAtom],
});

export const useUserName = () => useRecoilState(userNameAtom);
export const useSetUserName = () => useSetRecoilState(userNameAtom);
export const useUserNameValue = () => useRecoilValue(userNameAtom);

// USER TOKEN
const userTokenAtom = atom({
   key: "userToken",
   default: {
      token: null,
   },
   effects_UNSTABLE: [persistAtom],
});

export const useUserToken = () => useRecoilState(userTokenAtom);
export const useTokenValue = () => useRecoilValue(userTokenAtom);
export const useSetUserToken = () => useSetRecoilState(userTokenAtom);

// CURRENT CORDS USER
const curretCordsAtom = atom({
   key: "curretCords",
   default: {
      currentLat: null,
      currentLng: null,
   },
});

export const useUserCords = () => useRecoilState(curretCordsAtom);
export const useCordsValue = () => useRecoilValue(curretCordsAtom);
export const useSetUserCords = () => useSetRecoilState(curretCordsAtom);

// PETID Y PETNAME DE LA MASCOTA QUE SE DESEA REPORTAR INFORMACION
const reportInfoAtom = atom({
   key: "reportInfo",
   default: {
      petId: null,
      petname: null,
   },
});

export const useReportInfo = () => useRecoilState(reportInfoAtom);
export const useReportInfoValue = () => useRecoilValue(reportInfoAtom);
export const useSetReportInfo = () => useSetRecoilState(reportInfoAtom);

// PETID DE LA MASCOTA A EDITAR
const petIdEditAtom = atom({
   key: "petIdEdit",
   default: {
      petId: null,
   },
});

export const usePetIdEdit = () => useRecoilState(petIdEditAtom);
export const usePetIdEditValue = () => useRecoilValue(petIdEditAtom);
export const useSetPetIdEdit = () => useSetRecoilState(petIdEditAtom);

// DATA DE LA MASCOTA A EDITAR
const petEditDataAtom = atom({
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

export const usePetEditData = () => useRecoilState(petEditDataAtom);
export const usePetEditDataValue = () => useRecoilValue(petEditDataAtom);
export const useSetPetEditData = () => useSetRecoilState(petEditDataAtom);
