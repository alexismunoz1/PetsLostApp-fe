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

const burgerState = selector({
   key: "burgerState",
   get: ({ get }) => {
      return get(burgerStateAtom);
   },
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
      lat: null,
      lng: null,
   },
});

export const useUserCords = () => useRecoilState(curretCordsAtom);
export const useCordsValue = () => useRecoilValue(curretCordsAtom);
export const useSetUserCords = () => useSetRecoilState(curretCordsAtom);

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
