import Button from "./Button";
import data from "../utils/data.json";

const ButtonGroup = () => {
  return (
    <div className="grid grid-cols-4 ">
      {data.map((el) => {
        return <Button key={el.title} title={el.title} span={el.span} />;
      })}
    </div>
  );
};

ButtonGroup.propTypes = {};

export default ButtonGroup;
