import { useState, MouseEvent, useEffect } from "react";
import { CraftingRarity } from "../interfaces";
import { defaultRunePointCostPerRarity, defaultRuneCountState } from "../utils/defaultData";

interface Props {
  callback: (state: Record<CraftingRarity, number>) => void;
  rarityList: CraftingRarity[];
  rowName: string;
  pointsPerTattooRarity: number;
  tattooRarity: CraftingRarity;
}

const RuneRow = ({ callback, rarityList, rowName, pointsPerTattooRarity, tattooRarity }: Props) => {
  const [runeCount, setRuneCount] = useState<Record<CraftingRarity, number>>(defaultRuneCountState);

  useEffect(() => {
    setRuneCount(defaultRuneCountState);
    callback(defaultRuneCountState);
  }, [tattooRarity]);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentRarity = e.currentTarget.value as CraftingRarity;
    if (e.type === "click") {
      setRuneCount((prevState) => {
        // TODO: Hacky but works, i'll fix it later
        const newState = { ...prevState, [currentRarity]: prevState[currentRarity] + 1 };
        callback(newState);
        return newState;
      });
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      if (runeCount[currentRarity] > 0) {
        setRuneCount((prevState) => {
          // TODO: Hacky but works, i'll fix it later
          const newState = { ...prevState, [currentRarity]: prevState[currentRarity] - 1 };
          callback(newState);
          return newState;
        });
      }
    }
  };

  const usedPoints = Object.entries(runeCount)
    //@ts-ignore
    .map(([k, v]) => defaultRunePointCostPerRarity[k] * v)
    .reduce((a, b) => a + b);

  const shouldBeDisabled = (rarity: CraftingRarity) => {
    const currentCost = defaultRunePointCostPerRarity[rarity];
    return pointsPerTattooRarity - usedPoints < currentCost;
  };

  return (
    <div className="row">
      <div>{`${rowName} (${usedPoints}/${pointsPerTattooRarity})`}</div>
      {rarityList.map((rarity, id) => (
        <button
          key={id}
          value={rarity}
          onClick={onClick}
          onContextMenu={onClick}
          className={"button"}
          disabled={shouldBeDisabled(rarity)}
        >
          {rarity} {runeCount[rarity]}
        </button>
      ))}
    </div>
  );
};

export default RuneRow;
