import { createContext, useContext, useState } from "react";
import { Functions } from "words-ui";

const defaultData = { count: 0, userName: "" };
// eslint-disable-next-line react/hook-use-state
const useStoredData = () => useState(defaultData);

type StoreState = ReturnType<typeof useStoredData>;

const StoreContext = createContext<StoreState>([defaultData, Functions.empty]);

type StoreProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: StoreProps) => (
  <StoreContext.Provider value={useStoredData()}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
