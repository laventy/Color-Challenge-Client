import React, { useContext } from "react";

import ColorsStore from "stores/colorsStore";

const colorsStore = new ColorsStore();
const colorStoreContext = React.createContext(colorsStore);

export const useColorsStore = (): ColorsStore => {
  const colorStoreInstace = useContext(colorStoreContext);
  return colorStoreInstace;
};
