import React from "react";
import { createUseStyles } from "react-jss";
import { Colors, FontWeight } from "words-ui";
import { useStore } from "../context/Store";
import { SuperButton } from "./SuperButton";
import { UserNameInput } from "./UserNameInput";

const useStyles = createUseStyles({
  text: { color: Colors.info, fontWeight: FontWeight.bold },
});

const App = () => {
  const classes = useStyles();
  const [data, _] = useStore();
  const { userName, count } = data;

  return (
    <>
      <UserNameInput />
      <p className={classes.text}>
        {userName === "" ? "You" : userName} clicked {count} times
      </p>
      <SuperButton />
    </>
  );
};

export default App;
