export type CardType = {
  name: string;
};
export type CardEffect = {
  name: string;
  value: string;
  description: string;
};

export type Card = {
  title: string;
  description: string;
  image: any; // Todo: figure out this type
  cardType: CardType[];
  effects: CardEffect[];
};
async function getCards(): Promise<Card[]> {
  try {
    const res = await fetch('http://localhost:3000/api/cards');
    const cards = res.json();
    return cards;
  } catch (e) {
    return [];
  }
}

export const CardService = {
  getCards,
};
