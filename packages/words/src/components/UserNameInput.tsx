import { useStore } from "../context/Store";

export const UserNameInput = () => {
  const [data, setData] = useStore();

  return (
    <>
      <span>Your name: </span>
      <input onChange={element => setData({ ...data, userName: element.target.value })} value={data.userName} />
    </>
  );
};
