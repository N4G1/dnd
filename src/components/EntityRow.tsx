import { useState } from "react";

interface Props {
  callback: Function;
  items: string[];
  name: string;
  isRuneRow?: boolean;
}

const EntityRow = ({ callback, items, name, isRuneRow }: Props) => {
  const [entity, setEntity] = useState(undefined);

  const onClickHeh = (e: any) => {
    const newValue = entity === e.currentTarget.value ? undefined : e.currentTarget.value;
    setEntity(newValue);
    callback(newValue);
  };

  if (isRuneRow) return <></>;

  return (
    <div className="row">
      <div>{name}</div>
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

export default EntityRow;
