import { useState, MouseEvent } from "react";

interface Props {
  callback: Function;
  items: string[];
  name: string;
}

const EntityRow = ({ callback, items, name }: Props) => {
  const [entity, setEntity] = useState<string>("Common");

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const newValue = e.currentTarget.value;
    setEntity(newValue);
    callback(newValue);
  };

  return (
    <div className="row">
      <div>{name}</div>
      {items.map((item, idx) => (
        <button key={idx} value={item} onClick={onClick} className={item === entity ? "Active" : "button"}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default EntityRow;
