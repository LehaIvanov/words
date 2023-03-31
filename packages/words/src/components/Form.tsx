import { useState, type KeyboardEvent } from "react";
import { Button } from "words-ui";
import { useStore } from "../context/Store";

export const Form = () => {
  const { add } = useStore();
  const [name, setName] = useState("");

  const submit = () => {
    add(name);
    setName("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  return (
    <>
      <span>Your name: </span>
      <input onChange={element => setName(element.target.value)} onKeyDown={handleKeyDown} value={name} />
      <Button onClick={submit} text="Add user" />
    </>
  );
};
