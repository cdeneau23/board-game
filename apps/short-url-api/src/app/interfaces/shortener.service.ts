import { ApiResponse } from '@two-dogs-studios/api-models';

export interface ShortUrlService {
  getAllShortUrls(): Promise<ApiResponse<string>>;

  getOneShortUrl(): Promise<ApiResponse<string>>;

  createNewShortUrl(longUrl: string): Promise<ApiResponse<string>>;

  updateOneShortUrl(): Promise<ApiResponse<string>>;

  deleteOneShortUrl(): Promise<ApiResponse<string>>;
}
