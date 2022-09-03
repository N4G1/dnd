import { useState } from "react";

interface Props {
  callback: Function;
  items: string[];
  name: string;
}

const EntityColumn = ({ callback, items, name }: Props) => {
  const [entity, setEntity] = useState(undefined);

  const onClickHeh = (e: any) => {
    const newValue = entity === e.currentTarget.value ? undefined : e.currentTarget.value;
    setEntity(newValue);
    callback(newValue);
  };

  return (
    <div className={"column"}>
      <span>{name}</span>
      {items.map((item, idx) => (
        <button
          key={idx}
          value={item}
          // @ts-ignore
          onClick={onClickHeh}
          className={item === entity ? "Active" : "button"}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default EntityColumn;
