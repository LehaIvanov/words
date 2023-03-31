import { useStore } from "../context/Store";
import { Form } from "./Form";
import { Row } from "./Row";

export const App = () => {
  const { data } = useStore();

  return (
    <>
      <Form />
      {data.map(user => (
        <Row key={user.id} user={user} />
      ))}
    </>
  );
};
