import React, { useState, useEffect } from "react";
import {
   atom,
   useRecoilState,
   useRecoilValue,
   selector,
   useSetRecoilState,
} from "recoil";

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

// userStateAtom

export const userDataAtom = atom({
   key: "userDataAtom",
   default: {
      email: "",
      fullname: "",
   },
});

export const useUserData = () => useRecoilState(userDataAtom);

export const userData = selector({
   key: "userData",
   get: async ({ get }) => {
      return get(userDataAtom);
   },
});

export const useUserDataValue = () => useRecoilValue(userData);

export const userTokenAtom = atom({
   key: "userToken",
   default: {
      token: "",
   },
});
export const useUserToken = () => useRecoilState(userTokenAtom);
