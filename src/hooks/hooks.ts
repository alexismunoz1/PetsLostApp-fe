import React, { useState, useEffect } from "react";
import {
   atom,
   useRecoilState,
   useRecoilValue,
   selector,
   useSetRecoilState,
} from "recoil";

export const emailRegex =
   /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

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

// EMAIL
export const userEmailAtom = atom({
   key: "userEmailAtom",
   default: {
      email: "",
   },
});

export const userEmail = selector({
   key: "userEmail",
   get: async ({ get }) => {
      return get(userEmailAtom);
   },
});

export const useUserEmail = () => useRecoilState(userEmailAtom);
export const useUserEmailValue = () => useRecoilValue(userEmail);

// FULLNAME
export const userNameAtom = atom({
   key: "userNameAtom",
   default: {
      fullname: "",
   },
});

export const userName = selector({
   key: "userName",
   get: async ({ get }) => {
      return get(userNameAtom);
   },
});

export const useUserName = () => useRecoilState(userNameAtom);
export const useUserNameValue = () => useRecoilValue(userName);

// TOKEN
export const userTokenAtom = atom({
   key: "userToken",
   default: {
      token: null,
   },
});

// export const userToken = selector({
//    key: "userToken",
//    get: async ({ get }) => {
//       return get(userTokenAtom);
//    },
// });

export const useSetToken = () => useRecoilState(userTokenAtom);
// export const useUserTokenValue = () => useRecoilValue(userToken);
