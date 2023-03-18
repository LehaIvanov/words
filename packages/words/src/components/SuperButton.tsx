import { Button } from "words-ui";
import { useStore } from "../context/Store";

export const SuperButton = () => {
  const [data, setData] = useStore();

  return (
    <Button
      onClick={() =>
        setData({
          ...data,
          count: data.count + 1,
        })
      }
      text="Click on me"
    />
  );
};
