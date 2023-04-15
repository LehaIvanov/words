import { useState } from "react";
import { Page, usePageStore } from "../../context/PageStore";
import type { Todo } from "../../models/Todo";

type FormProps = {
  todo: Todo;
};

export const Form = ({ todo }: FormProps) => {
  const { goToPage } = usePageStore();
  const [model, setModel] = useState(todo);

  return (
    <>
      <header>
        <b>Form page</b>
      </header>
      <button onClick={() => goToPage(Page.List)} type="button">
        Go to list page
      </button>
      <span>Title:</span>
      <input onChange={element => setModel({ ...model, title: element.target.value })} value={model.title} />
      <span>Estimate:</span>
      <input
        onChange={element => {
          const value = Number.parseInt(element.target.value, 10);

          return setModel({ ...model, estimate: Number.isNaN(value) ? 0 : value });
        }}
        value={model.estimate}
      />
    </>
  );
};
