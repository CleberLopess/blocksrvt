import requestAxios from "services/axios";
import { AxiosResponse } from "axios";
import { CardType } from "store/slices/card/card.types";

export const getCardsDefault = async () => {
  const { data }: AxiosResponse<CardType[]> = await requestAxios.get("", {
    params: {
      skip: 0,
      take: 30,
    },
  });

  return data;
};

export const getNextCards = async (skip: number, take: number) => {
  const { data }: AxiosResponse<CardType[]> = await requestAxios.get("", {
    params: {
      skip: skip,
      take: take,
    },
  });

  return data;
};
