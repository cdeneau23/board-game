import { Entry } from 'contentful';
import { Card, CardEntry } from '../types/card';
import { cardEffectMapper } from './card-effect.mapper';
import { cardTypeMapper } from './card-type-mapper';

export function cardMapper(entry: Entry<CardEntry>): Card {
  return {
    title: entry.fields.title,
    description: entry.fields.description,
    image: entry.fields.image,
    cardType: entry.fields.cardType
      ? entry.fields.cardType.map(cardTypeMapper)
      : [],
    effects: entry.fields.effects
      ? entry.fields.effects.map(cardEffectMapper)
      : [],
  };
}
