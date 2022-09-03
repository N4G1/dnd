import { useState } from "react";
import "../App.css";
import EntityColumn from "../components/EntityColumn";
import TattooTotalResult from "../components/TattooTotalResult";
import { CraftingRarity, InkRarity, KitRarity } from "../interfaces";

const TattooPage = () => {
  const [tattooRarity, setTattooRarity] = useState<CraftingRarity>("Common");
  const [runeRarity, setRuneRarity] = useState<CraftingRarity>("Common");
  const [inkRarity, setInkRarity] = useState<InkRarity>("Magic Ink");
  const [kitRarity, setKitRarity] = useState<KitRarity>("Tattooers Kit");

  const rarity: CraftingRarity[] = ["Common", "Uncommon", "Rare", "Very Rare", "Legendary"];
  const ink: InkRarity[] = ["Magic Ink", "Dragons Blood", "Krakens Ink", "Planetars Blood", "Gods Blood"];
  const kit: KitRarity[] = ["Tattooers Kit", "Magical TK", "Magical TK +1", "Magical TK +2", "Magical TK +3"];

  return (
    <header className="App-header">
      <div className={"body"}>
        <EntityColumn name={"Tattoo"} callback={setTattooRarity} items={rarity} />
        <EntityColumn name={"Runes"} callback={setRuneRarity} items={rarity} />
        <EntityColumn name={"Ink"} callback={setInkRarity} items={ink} />
        <EntityColumn name={"Kit"} callback={setKitRarity} items={kit} />
        <TattooTotalResult
          tattooRarity={tattooRarity}
          inkRarity={inkRarity}
          kitRarity={kitRarity}
          rune={{ rarity: runeRarity, count: 1 }}
        />
      </div>
    </header>
  );
};

export default TattooPage;
