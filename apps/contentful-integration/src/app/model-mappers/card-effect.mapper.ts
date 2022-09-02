import { CardEffect } from '@two-dogs-studios/card';
import { Entry } from 'contentful';

export function cardEffectMapper(entry: Entry<CardEffect>) {
  return {
    name: entry.fields.name,
    value: entry.fields.name,
    description: entry.fields.description,
  };
}
