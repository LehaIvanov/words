import { createContext, useContext, useState } from "react";
import { Functions } from "words-ui";
import type { Todo } from "../data/Todo";

const defaultData: Todo[] = [];

const useStoredData = () => {
  const [data, setData] = useState(defaultData);
  const addTodo = (newTodo: Todo) => setData([...data, newTodo]);
  const deleteTodo = (id: number) => setData(data.filter(item => item.id !== id));

  const toggleTodo = (id: number) =>
    setData(data.map(item => (item.id === id ? { id, isDone: !item.isDone, title: item.title } : item)));

  return {
    addTodo,
    deleteTodo,
    todoList: data,
    toggleTodo,
  };
};

type StoreState = ReturnType<typeof useStoredData>;

const StoreContext = createContext<StoreState>({
  addTodo: Functions.empty,
  deleteTodo: Functions.empty,
  todoList: [],
  toggleTodo: Functions.empty,
});

type StoreProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: StoreProps) => (
  <StoreContext.Provider value={useStoredData()}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
