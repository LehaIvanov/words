import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Functions } from "words-ui";
import type { User } from "../data/User";
import { getUsers, saveUsers } from "../services/UsersRepository";
// cspell:ignore: uuidv4

const defaultData: User[] = [];

const useStoredData = () => {
  const [users, setUsers] = useState(() => getUsers());

  const add = (name: string) => {
    const newUsers = [
      ...users,
      {
        id: uuidv4(),
        name,
      },
    ];
    saveUsers(newUsers);
    setUsers(newUsers);
  };

  const remove = (id: string) => {
    const newUsers = users.filter(user => user.id !== id);
    saveUsers(newUsers);
    setUsers(newUsers);
  };

  return { add, data: users, remove };
};

type StoreState = ReturnType<typeof useStoredData>;

const StoreContext = createContext<StoreState>({
  add: Functions.empty,
  data: defaultData,
  remove: Functions.empty,
});

type StoreProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: StoreProps) => (
  <StoreContext.Provider value={useStoredData()}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
