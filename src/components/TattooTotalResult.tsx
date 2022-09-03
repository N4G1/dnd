import { InkRarity, KitRarity, Price, CraftingRarity } from "../interfaces";

interface Props {
  tattooRarity: CraftingRarity;
  rune: {
    rarity: CraftingRarity;
    count: number;
  };
  inkRarity: InkRarity;
  kitRarity: KitRarity;
}

const TattooTotalResult = ({ tattooRarity, rune, inkRarity, kitRarity }: Props) => {
  const BaseTattooDays = 2;
  const BaseTattooDC = 13;
  const BaseTattooGold = 100;
  const BaseTattooHours = BaseTattooDays * 8;

  const tattooCost: Record<CraftingRarity, Price> = {
    Common: {
      Days: BaseTattooDays,
      DC: BaseTattooDC,
      Gold: BaseTattooGold,
      Hours: BaseTattooHours,
    },
    Uncommon: {
      Days: BaseTattooDays * 2,
      DC: BaseTattooDC + 3,
      Gold: BaseTattooGold * 4,
      Hours: BaseTattooHours * 2,
    },
    Rare: {
      Days: BaseTattooDays * 3,
      DC: BaseTattooDC + 7,
      Gold: BaseTattooGold * 4,
      Hours: BaseTattooHours * 3,
    },
    "Very Rare": {
      Days: BaseTattooDays * 8,
      DC: BaseTattooDC + 12,
      Gold: BaseTattooGold * 4,
      Hours: BaseTattooHours * 8,
    },
    Legendary: {
      Days: BaseTattooDays * 16,
      DC: BaseTattooDC + 17,
      Gold: BaseTattooGold * 4,
      Hours: BaseTattooHours * 16,
    },
  };
  const runeCost: Record<CraftingRarity, number> = {
    Common: 2,
    Uncommon: 4,
    Rare: 6,
    "Very Rare": 10,
    Legendary: 15,
  };
  const inkCost: Record<InkRarity, number> = {
    "Magic Ink": -0,
    "Dragons Blood": -2,
    "Krakens Ink": -4,
    "Planetars Blood": -8,
    "Gods Blood": -15,
  };
  const kitCost: Record<KitRarity, number> = {
    "Tattooers Kit": -0,
    "Magical TK": -2,
    "Magical TK +1": -3,
    "Magical TK +2": -4,
    "Magical TK +3": -5,
  };

  const tattoDC = tattooCost[tattooRarity];
  const runeDC = runeCost[rune.rarity] * rune.count;
  const inkDC = inkCost[inkRarity];
  const kitDC = kitCost[kitRarity];

  return (
    <div className={"column-sum"}>
      <p>{`Tattoo: ${tattooRarity} = ${tattoDC?.DC}`}</p>
      <p>{`Rune: ${rune.rarity} x ${rune.count} = ${runeDC}`}</p>
      <p>{`Ink: ${inkRarity} = ${inkDC}`}</p>
      <p>{`Kit: ${kitRarity} = ${kitDC}`}</p>
      <hr />
      <p>{`Total DC: ${tattoDC?.DC + runeDC + inkDC + kitDC}`}</p>
      <p>{`Total Time: ${tattoDC?.DC + runeDC + inkDC + kitDC}`}</p>
    </div>
  );
};

export default TattooTotalResult;
