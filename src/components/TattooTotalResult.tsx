import { InkRarity, KitRarity, CraftingRarity } from "../interfaces";
import {
  defaultPermanentTattooTimeDaysPerRarity,
  defaultRuneDCPerRarity,
  defaultTattooDCPerRarity,
  defaultTattooInkDCDecreasePerRarity,
  defaultTattooKitDCDecreasePerRarity,
  defaultTemporaryTattooTimeDaysPerRarity,
} from "../utils/defaultData";
import { CRAFTING_DAY_AS_HOURS } from "../utils/constants";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import { useTattoo, useTattooUpdate } from "./TattooProvider";

interface Props {
  tattooRarity: CraftingRarity;
  runeCount: Record<CraftingRarity, number>;
  inkRarity: InkRarity;
  kitRarity: KitRarity;
}

const TattooTotalResult = ({ tattooRarity, runeCount, inkRarity, kitRarity }: Props) => {
  const isPermanent = useTattoo();
  const toggleTattooTime = useTattooUpdate();

  const getCurrentRuneSelectionDC = (runeObj: Record<CraftingRarity, number>): number =>
    Object.entries(runeObj)
      //@ts-ignore
      .map(([k, v]) => defaultRuneDCPerRarity[k] * v)
      .reduce((a, b) => a + b, 0);

  const tattooDC = defaultTattooDCPerRarity[tattooRarity];
  const tattooTimeDays = isPermanent
    ? defaultPermanentTattooTimeDaysPerRarity[tattooRarity]
    : defaultTemporaryTattooTimeDaysPerRarity[tattooRarity];
  const tattooTimeHours = tattooTimeDays * CRAFTING_DAY_AS_HOURS;
  const runeDC = getCurrentRuneSelectionDC(runeCount);
  const inkDC = defaultTattooInkDCDecreasePerRarity[inkRarity];
  const kitDC = defaultTattooKitDCDecreasePerRarity[kitRarity];

  const generateRuneOverview = (runeObj: Record<CraftingRarity, number>) => {
    return (
      Object.entries(runeObj)
        .filter(([k, v]) => v !== 0)
        //@ts-ignore
        .map(([k, v], id) => <p key={id}>{`Rune: ${k} x ${v} = ${defaultRuneDCPerRarity[k] * v}`}</p>)
    );
  };

  return (
    <div className="Tattoo-summary">
      <div className="Tattoo-advanced">
        <ToggleSwitch on={isPermanent} onClick={toggleTattooTime} labelOn="permanent" labelOff="temporary" />
      </div>
      <hr />
      <div className="column-sum">
        <p>{`Tattoo: ${tattooRarity} = ${tattooDC}`}</p>
        {generateRuneOverview(runeCount)}
        <p>{`Ink: ${inkRarity} = ${inkDC}`}</p>
        <p>{`Kit: ${kitRarity} = ${kitDC}`}</p>
        <hr />
        <p>{`Total DC: ${tattooDC + runeDC + inkDC + kitDC}`}</p>
        <p>{`Total Time(d): ${tattooTimeDays}`}</p>
        <p>{`Total Time(h): ${tattooTimeHours}`}</p>
      </div>
    </div>
  );
};

export default TattooTotalResult;
