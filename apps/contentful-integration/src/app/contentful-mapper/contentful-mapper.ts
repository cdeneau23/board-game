import { ContentfulClientApi, Entry } from 'contentful';

export const ContentfulFetcher = (client: ContentfulClientApi) => {

  async function getEntryById<EntryType, Type>(id: string, mapper: (entry: Entry<EntryType>) => Type) {
    const entry = await client.getEntry<EntryType>(id);
    const obj = mapper(entry);
    return obj;
  }

  async function getAllEntriesByType<EntryType, Type>(type: string, mapper: (entry: Entry<EntryType>) => Type) {
    const entries = await client.getEntries<EntryType>({
      content_type: type,
    });

    return entries.items ? entries.items.map(mapper) : [];
  }
  return {
    getEntryById,
    getAllEntriesByType
  };
};
