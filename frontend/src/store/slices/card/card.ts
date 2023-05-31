import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardType, CardTypeState } from "./card.types";

const INITIAL_STATE: CardTypeState = {
  isLoad: false,
  cards: [
    {
      id: "",
      premium: false,
      details: {
        name: "",
        descripition: "",
      },
    },
  ],
};

export const slice = createSlice({
  name: "card",
  initialState: INITIAL_STATE,
  reducers: {
    setStateCards(state, { payload }: PayloadAction<CardType[]>) {
      return { ...state, isLoad: true, cards: payload };
    },
    setNextCards(state, { payload }: PayloadAction<CardType[]>) {
      return { ...state, isLoad: true, cards: [...state.cards, ...payload] };
    },
  },
});

export const { setStateCards, setNextCards } = slice.actions;

export const selectCards = (state: CardTypeState) => state.cards;

export const cardReduces = slice.reducer;
