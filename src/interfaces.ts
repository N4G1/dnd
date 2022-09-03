export type CraftingRarity = "Common" | "Uncommon" | "Rare" | "Very Rare" | "Legendary";
export type InkRarity = "Magic Ink" | "Dragons Blood" | "Krakens Ink" | "Planetars Blood" | "Gods Blood";
export type KitRarity = "Tattooers Kit" | "Magical TK" | "Magical TK +1" | "Magical TK +2" | "Magical TK +3";

export interface Price {
  Days: number;
  DC: number;
  Gold: number;
  Hours: number;
}
