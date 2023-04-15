import { Page, usePageStore } from "../../context/PageStore";
import type { Todo } from "../../models/Todo";

type ListProps = {
  todos: Todo[];
};

export const List = ({ todos }: ListProps) => {
  const { goToPage } = usePageStore();

  return (
    <>
      <header>
        <b>List page</b>
      </header>
      <button onClick={() => goToPage(Page.AddTodo)} type="button">
        Go to add todo page
      </button>
      {todos.map(todo => (
        <div key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.estimate}</div>
          <div>{todo.isDone}</div>
        </div>
      ))}
    </>
  );
};
