import { List } from "./components/list";
import { dataCongressmen } from "./data/data-congressmen";

export const App = () => {
  const { fullname } = dataCongressmen;
 
  return (
    <>
     <List /> 
    </>
  );
};
