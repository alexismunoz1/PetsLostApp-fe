import {
   atom,
   useRecoilState,
   useRecoilValue,
   selector,
   useSetRecoilState,
} from "recoil";
import { recoilPersist } from "recoil-persist";

// ClICK BURGER MENU
export const burgerStateAtom = atom({
   key: "burgerClick",
   default: false,
});

export const burgerState = selector({
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

export const userEmailAtom = atom({
   key: "userEmailAtom",
   default: {
      email: null,
   },
   effects_UNSTABLE: [persistAtom],
});

export const userEmail = selector({
   key: "userEmail",
   get: async ({ get }) => {
      return get(userEmailAtom);
   },
});

export const useUserEmail = () => useRecoilState(userEmailAtom);
export const useSetUserEmail = () => useSetRecoilState(userEmailAtom);
export const useUserEmailValue = () => useRecoilValue(userEmail);

// FULLNAME

export const userNameAtom = atom({
   key: "userNameAtom",
   default: {
      fullname: null,
   },
   effects_UNSTABLE: [persistAtom],
});

export const userName = selector({
   key: "userName",
   get: async ({ get }) => {
      return get(userNameAtom);
   },
});

export const useUserName = () => useRecoilState(userNameAtom);
export const useSetUserName = () => useSetRecoilState(userNameAtom);
export const useUserNameValue = () => useRecoilValue(userName);

// USER TOKEN
export const userTokenAtom = atom({
   key: "userToken",
   default: {
      token: null,
   },
   effects_UNSTABLE: [persistAtom],
});

// export const userToken = selector({
//    key: "userToken",
//    get: async ({ get }) => {
//       return get(userTokenAtom);
//    },
// });

export const useUserToken = () => useRecoilState(userTokenAtom);
export const useTokenValue = () => useRecoilValue(userTokenAtom);
export const useSetUserToken = () => useSetRecoilState(userTokenAtom);

// CURRENT CORDS USER
export const curretCordsAtom = atom({
   key: "curretCords",
   default: {
      lat: null,
      lng: null,
   },
});

export const useUserCords = () => useRecoilState(curretCordsAtom);
export const useCordsValue = () => useRecoilValue(curretCordsAtom);
export const useSetUserCords = () => useSetRecoilState(curretCordsAtom);
