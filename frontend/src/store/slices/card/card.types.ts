export type CardTypeState = {
  isLoad: boolean;
  cards: CardType[];
};

export type CardType = {
  id: string;
  premium: boolean;
  details: {
    name: string;
    descripition: string;
  };
};
