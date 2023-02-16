import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";

const Main = () => {
  /* console.log(data); */
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <Card {...item} key={item.index}/>
        );
      })}
    </div>
  );
};

export default Main;
