import { createUseStyles } from "react-jss";
import { Button, Colors, FontWeight } from "words-ui";
import { useStore } from "../context/Store";
import type { User } from "../data/User";

const useStyles = createUseStyles({
  deleteButton: { marginLeft: 4 },
  text: { color: Colors.info, fontWeight: FontWeight.bold },
});

type RowProps = {
  user: User;
};

export const Row = ({ user }: RowProps) => {
  const classes = useStyles();
  const { remove } = useStore();

  return (
    <div>
      <Button onClick={() => remove(user.id)} text="X" /> <span className={classes.text}>{user.name}</span>
    </div>
  );
};
