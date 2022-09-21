import { isUri } from 'valid-url'
import { ShortUrl } from '../types/short-url';
import nanoid = require('nanoid');

export function shortenUrl(baseUrl: string, longUrl: string): ShortUrl {
  if (!isUri(baseUrl)) {
    throw new Error('Invalid base URL provided');
  }
  const isValid = isUri(longUrl);
  if (!isValid) {
    throw new Error('Invalid long URI provided');
  }

  const urlCode = nanoid.nanoid();

  const shortUrl = baseUrl + '/' + urlCode;

  return { shortUrl, urlCode };
}
