import { createContext } from "react";

import React from "react";
import { useEffect } from "react";
// import { useState } from "react";
// custom hook logic
// export function useLocalStorage(key, intialValue) {
//   const [value, setValue] = React.useState(
//     () => JSON.parse(localStorage.getItem(key)) || intialValue
//   );

//   const setLocalStorageValue = (value) => {
//     setValue(() => {
//       if (value) localStorage.setItem(key, JSON.stringify(value));

//       return value;
//     });
//   };

//   // to set local storage
//   useEffect(() => {
//     setLocalStorageValue(value);
//     // refresh local storage each time a new iterm is been added.
//     const refreshStorage = (event) => {
//       if (event.key === key) {
//         setValue(event.newValue);
//       }
//     };

//     window.addEventListener("storage", refreshStorage);

//     return () => {
//       window.removeEventListener("storage", refreshStorage);
//     };
//   }, [key]);

//   return { value, setValue: setLocalStorageValue };
// }

export function useLocalStorage(key, intialValue) {
  const [value, setValue] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || intialValue
  );

  const setLocalStorageValue = (value) => {
    setValue((prev) => {
      const newData = [...prev, value]
      localStorage.setItem(key, JSON.stringify(newData));

      return [...newData];
    });
  };

  return { value, setValue: setLocalStorageValue };
}

// create context
export const FoodContext = createContext();
export const FoodProvider = FoodContext.Provider;

//  initialize useContext as useFooditerms so as to consume it on other components
export const useFooditerms = () => {
  return React.useContext(FoodContext);
};
