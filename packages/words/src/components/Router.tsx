import { Page, usePageStore } from "../context/PageStore";
import { createEmptyTodo } from "../models/Todo";
import { Form } from "./pages/Form";
import { List } from "./pages/List";

export const Router = () => {
  const { activePage } = usePageStore();

  return {
    [Page.AddTodo]: <Form todo={createEmptyTodo()} />,
    [Page.EditTodo]: <Form todo={createEmptyTodo()} />,
    [Page.List]: (
      <List
        todos={[
          { id: 0, estimate: 5, title: "Task1", isDone: false },
          { id: 1, estimate: 15, title: "Task2", isDone: false },
        ]}
      />
    ),
  }[activePage];
};
