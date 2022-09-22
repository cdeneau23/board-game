import { ApiResponse } from '@two-dogs-studios/api-models';
import {
  shortenUrl,
  ShortUrlDto,
  UpdateShortUrlRequest,
} from '@two-dogs-studios/url-shorter';
import { ShortUrlService } from '../interfaces/shortener.service';
import { UrlModel } from '../mongo/short-urls';

const getAllShortUrls = async (): Promise<ApiResponse<ShortUrlDto[]>> => {
  try {
    const dtos: ShortUrlDto[] = [];
    for await (const url of UrlModel.find()) {
      const dto: ShortUrlDto = {
        shortUrl: url.shortUrl,
        longUrl: url.longUrl,
        urlCode: url.urlCode,
        createdOn: new Date(url.createdOn),
      };
      dtos.push(dto);
    }
    return { success: 'Valid', data: dtos };
  } catch (err) {
    console.error(err);
    return { success: 'Invalid', data: err.message };
  }
};

const getOneShortUrl = async (
  id: string
): Promise<ApiResponse<ShortUrlDto>> => {
  try {
    const urlDoc = await UrlModel.findOne({ urlCode: id });
    const urlDto: ShortUrlDto = {
      shortUrl: urlDoc.shortUrl,
      longUrl: urlDoc.longUrl,
      urlCode: urlDoc.urlCode,
      createdOn: new Date(urlDoc.createdOn),
    };
    return { success: 'Valid', data: urlDto };
  } catch (err) {
    return { success: 'Invalid', data: err.message };
  }
};

const createNewShortUrl = async (
  longUrl: string
): Promise<ApiResponse<ShortUrlDto>> => {
  try {
    const shortUrl = shortenUrl('http://localhost:3333', 'https://google.com');
    const urlData = {
      longUrl: longUrl,
      shortUrl: shortUrl.shortUrl,
      urlCode: shortUrl.urlCode,
      createdOn: new Date(),
      modifiedOn: null
    };
    const url = new UrlModel(urlData);
    await url.save();
    const urlDto: ShortUrlDto = {
      shortUrl: url.shortUrl,
      longUrl: url.longUrl,
      urlCode: url.urlCode,
      createdOn: new Date(url.createdOn),
    };
    return { success: 'Valid', data: urlDto };
  } catch (e) {
    return { success: 'Invalid', data: e.message };
  }
};

const updateOneShortUrl = async (
  id: string,
  datum: UpdateShortUrlRequest
): Promise<ApiResponse<ShortUrlDto>> => {
  try {
    const urlDoc = await UrlModel.findOneAndUpdate(
      { urlCode: id },
      { ...datum, modifiedOn: new Date() },
      { new: true }
    );
    const urlDto: ShortUrlDto = {
      shortUrl: urlDoc.shortUrl,
      longUrl: urlDoc.longUrl,
      urlCode: urlDoc.urlCode,
      createdOn: new Date(urlDoc.createdOn),
    };
    return { success: 'Valid', data: urlDto };
  } catch (err) {
    return { success: 'Invalid', data: err.message };
  }
};

const deleteOneShortUrl = async (id: string): Promise<ApiResponse<boolean>> => {
  try {
    await UrlModel.findOneAndDelete({ urlCode: id });
    return { success: 'Valid', data: true };
  } catch (err) {
    return { success: 'Invalid', data: err.message };
  }
};

export const ShortUrlsService: ShortUrlService = {
  getAllShortUrls,
  getOneShortUrl,
  createNewShortUrl,
  updateOneShortUrl,
  deleteOneShortUrl,
};
