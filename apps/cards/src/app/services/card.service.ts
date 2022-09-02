import { Card } from '@two-dogs-studios/card';

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
