import { Entry } from 'contentful';
import { CardEffect } from '../types/card-effect';

export function cardEffectMapper(entry: Entry<CardEffect>) {
  return {
    name: entry.fields.name,
    value: entry.fields.name,
    description: entry.fields.description,
  };
}
