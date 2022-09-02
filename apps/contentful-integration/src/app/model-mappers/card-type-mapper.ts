import { CardType } from '@two-dogs-studios/card';
import { Entry } from 'contentful';

export function cardTypeMapper(entry: Entry<CardType>): CardType {
  return {
    name: entry.fields.name,
  };
}
