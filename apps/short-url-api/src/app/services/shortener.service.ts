import { ApiResponse } from '@two-dogs-studios/api-models';
import { shortenUrl } from '@two-dogs-studios/url-shorter';
import { ShortUrlService } from '../interfaces/shortener.service';
import { UrlModel } from '../mongo/short-urls';

const getAllShortUrls = async (): Promise<ApiResponse<string>> => {
  try {
    //     const code = await ShortUrl.toDataURL('https://youtube.com');
    return { success: 'Valid', data: 'Get all' };
  } catch (err) {
    console.error(err);
    return { success: 'Invalid', data: err.message };
  }
};

const getOneShortUrl = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Get an existing QR code' };
};

const createNewShortUrl = async (
  longUrl: string
): Promise<ApiResponse<string>> => {
  try {
        const shortUrl = shortenUrl('http://localhost:3333', 'https://google.com');
        const urlData = {
          longUrl: longUrl,
          shortUrl: shortUrl.shortUrl,
          urlCode: shortUrl.urlCode,
          date: new Date(),
        };
        const url = new UrlModel(urlData);
        await url.save();
    return { success: 'Valid', data: 'Create new' };
  } catch (e) {
    return { success: 'Invalid', data: e.message };
  }
};

const updateOneShortUrl = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Update an existing QR code' };
};

const deleteOneShortUrl = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Delete an existing QR code' };
};

export const ShortUrlsService: ShortUrlService = {
  getAllShortUrls,
  getOneShortUrl,
  createNewShortUrl,
  updateOneShortUrl,
  deleteOneShortUrl,
};
