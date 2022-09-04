import { useState } from "react";
import "../../App.css";
import EntityRow from "../../components/EntityRow";
import RuneRow from "../../components/RuneRow";
import TattooTotalResult from "../../components/TattooTotalResult";
import { CraftingRarity, InkRarity, KitRarity } from "../../interfaces";
import { defaultTattooPointsPerRarity } from "../../utils/defaultData";

const TattooPage = () => {
  const [tattooRarity, setTattooRarity] = useState<CraftingRarity>("Common");
  const [runes, setRunes] = useState<Partial<Record<CraftingRarity, number>>[]>([]);
  const [inkRarity, setInkRarity] = useState<InkRarity>("Magic Ink");
  const [kitRarity, setKitRarity] = useState<KitRarity>("Tattooers Kit");

  const rarity: CraftingRarity[] = ["Common", "Uncommon", "Rare", "Very Rare", "Legendary"];
  const ink: InkRarity[] = ["Magic Ink", "Dragons Blood", "Krakens Ink", "Planetars Blood", "Gods Blood"];
  const kit: KitRarity[] = ["Tattooers Kit", "Magical TK", "Magical TK +1", "Magical TK +2", "Magical TK +3"];

  const tattooPointsPerRarity = defaultTattooPointsPerRarity[tattooRarity] ?? 0;

  return (
    <div className="Tattoo-page">
      <div className="Tattoo-logic">
        <EntityRow name={`Tattoo (${tattooPointsPerRarity} pts)`} callback={setTattooRarity} items={rarity} />
        <RuneRow name={"Runes"} callback={setRunes} items={rarity} pointsPerTattooRarity={tattooPointsPerRarity} />
        <EntityRow name={"Ink"} callback={setInkRarity} items={ink} />
        <EntityRow name={"Kit"} callback={setKitRarity} items={kit} />
      </div>
      <TattooTotalResult tattooRarity={tattooRarity} inkRarity={inkRarity} kitRarity={kitRarity} runes={runes} />
    </div>
  );
};

export default TattooPage;
