import { ApiResponse } from '@two-dogs-studios/api-models';
import {
  ShortUrlDto,
  UpdateShortUrlRequest,
} from '@two-dogs-studios/url-shorter';

export interface ShortUrlService {
  getAllShortUrls(): Promise<ApiResponse<ShortUrlDto[]>>;

  getOneShortUrl(id: string): Promise<ApiResponse<ShortUrlDto>>;

  createNewShortUrl(longUrl: string): Promise<ApiResponse<ShortUrlDto>>;

  updateOneShortUrl(
    id: string,
    datum: UpdateShortUrlRequest
  ): Promise<ApiResponse<ShortUrlDto>>;

  deleteOneShortUrl(id: string): Promise<ApiResponse<boolean>>;
}
