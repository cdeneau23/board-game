import { Card } from '@two-dogs-studios/card';

const baseApi = process.env['NX_API_URL']; 

async function getCards(): Promise<Card[]> {
  try {
    const res = await fetch(`${baseApi}/api/cards`);
    const cards = res.json();
    return cards;
  } catch (e) {
    return [];
  }
}

export const CardService = {
  getCards,
};
