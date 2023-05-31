import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

//reducers
import { cardReduces } from "./slices/card/card";

export const store = configureStore({
  reducer: {
    cards: cardReduces,
  },
});

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useReduxSelector;
