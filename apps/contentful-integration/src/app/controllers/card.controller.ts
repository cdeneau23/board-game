import * as express from 'express';
import { ContentfulContext } from '../interfaces/contentful-fetcher';
import { ContentfulTypeMapper } from '../model-mappers';
import { Card, CardEntry} from '@two-dogs-studios/card';


export const CardController = (contentfulContext: ContentfulContext) => {
  async function getCardById(req: express.Request, res: express.Response) {
    const card = await contentfulContext.getEntryById<CardEntry, Card>(
      req.params.id,
      ContentfulTypeMapper.cardMapper
    );

    res.status(200).send(card);
  }

  async function getAllCard(req: express.Request, res: express.Response) {
    const entries = await contentfulContext.getAllEntriesByType<
      CardEntry,
      Card
    >('card', ContentfulTypeMapper.cardMapper);

    res.status(200).send(entries);
  }
  return {
    getCardById,
    getAllCard,
  };
};
