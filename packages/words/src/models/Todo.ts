export type Todo = {
  estimate: number;
  id: number;
  isDone: boolean;
  title: string;
};

export const createEmptyTodo = () => ({
  estimate: 0,
  id: 0,
  isDone: false,
  title: "",
});
