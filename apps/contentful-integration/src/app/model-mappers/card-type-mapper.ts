import { Entry } from 'contentful';
import { CardType } from '../types/card-type';

export function cardTypeMapper(entry: Entry<CardType>): CardType {
  return {
    name: entry.fields.name,
  };
}
