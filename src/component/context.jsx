import { createContext } from "react";

import React from "react";
import { useEffect } from "react";

export function useLocalStorage(key, intialValue) {
  const [value, setValue] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || intialValue
  );

  const setLocalStorageValue = (value) => {
    setValue((prev) => {
      if (!value) {
        return JSON.parse(localStorage.getItem(key)) || intialValue;
      }

      const newData = [...prev, value];
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
