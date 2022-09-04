import { CraftingRarity, InkRarity, KitRarity } from "../interfaces";
import { TATTOO_CRAFTING_TIME_MODIFIER, TEMPORARY_TATTOO_CRAFTING_TIME_MODIFIER } from "./constants";

export const defaultCraftingTimeDaysPerRarity: Record<CraftingRarity, number> = {
  Common: 2,
  Uncommon: 4,
  Rare: 8,
  "Very Rare": 32,
  Legendary: 64,
};

export const defaultPermanentTattooTimeDaysPerRarity: Record<CraftingRarity, number> = {
  Common: defaultCraftingTimeDaysPerRarity.Common * TATTOO_CRAFTING_TIME_MODIFIER,
  Uncommon: defaultCraftingTimeDaysPerRarity.Uncommon * TATTOO_CRAFTING_TIME_MODIFIER,
  Rare: defaultCraftingTimeDaysPerRarity.Rare * TATTOO_CRAFTING_TIME_MODIFIER,
  "Very Rare": defaultCraftingTimeDaysPerRarity["Very Rare"] * TATTOO_CRAFTING_TIME_MODIFIER,
  Legendary: defaultCraftingTimeDaysPerRarity.Legendary * TATTOO_CRAFTING_TIME_MODIFIER,
};

export const defaultTemporaryTattooTimeDaysPerRarity: Record<CraftingRarity, number> = {
  Common: defaultPermanentTattooTimeDaysPerRarity.Common * TEMPORARY_TATTOO_CRAFTING_TIME_MODIFIER,
  Uncommon: defaultPermanentTattooTimeDaysPerRarity.Uncommon * TEMPORARY_TATTOO_CRAFTING_TIME_MODIFIER,
  Rare: defaultPermanentTattooTimeDaysPerRarity.Rare * TEMPORARY_TATTOO_CRAFTING_TIME_MODIFIER,
  "Very Rare": defaultPermanentTattooTimeDaysPerRarity["Very Rare"] * TEMPORARY_TATTOO_CRAFTING_TIME_MODIFIER,
  Legendary: defaultPermanentTattooTimeDaysPerRarity.Legendary * TEMPORARY_TATTOO_CRAFTING_TIME_MODIFIER,
};

export const defaultTattooPointsPerRarity: Record<CraftingRarity, number> = {
  Common: 8,
  Uncommon: 10,
  Rare: 16,
  "Very Rare": 26,
  Legendary: 40,
};

export const defaultTattooDCPerRarity: Record<CraftingRarity, number> = {
  Common: 13,
  Uncommon: 16,
  Rare: 20,
  "Very Rare": 25,
  Legendary: 30,
};

export const defaultRunePointCostPerRarity: Record<CraftingRarity, number> = {
  Common: 2,
  Uncommon: 4,
  Rare: 6,
  "Very Rare": 10,
  Legendary: 15,
};

export const defaultRuneDCPerRarity: Record<CraftingRarity, number> = {
  Common: 2,
  Uncommon: 4,
  Rare: 6,
  "Very Rare": 10,
  Legendary: 15,
};

export const defaultTattooInkDCDecreasePerRarity: Record<InkRarity, number> = {
  "Magic Ink": -0,
  "Dragons Blood": -2,
  "Krakens Ink": -4,
  "Planetars Blood": -8,
  "Gods Blood": -15,
};

export const defaultTattooKitDCDecreasePerRarity: Record<KitRarity, number> = {
  "Tattooers Kit": -0,
  "Magical TK": -2,
  "Magical TK +1": -3,
  "Magical TK +2": -4,
  "Magical TK +3": -5,
};

export const defaultRuneCountState: Record<CraftingRarity, number> = {
  Common: 0,
  Uncommon: 0,
  Rare: 0,
  "Very Rare": 0,
  Legendary: 0,
};
