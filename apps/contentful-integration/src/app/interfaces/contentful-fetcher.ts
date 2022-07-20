import { Entry } from 'contentful';

export interface ContentfulContext {
  getEntryById: <EntryType, Type>(
    id: string,
    mapper: (entry: Entry<EntryType>) => Type
  ) => Promise<Type>;
  getAllEntriesByType: <EntryType, Type>(
    type: string,
    mapper: (entry: Entry<EntryType>) => Type
  ) => Promise<Type[]>;
}
