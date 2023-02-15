import { atom } from "recoil";

import type { CardProperty } from "../components/Card";

export const cardListState = atom<CardProperty[] | undefined>({
  key: "CardList",
  default: [],
});
