import { ApiResponse } from '@two-dogs-studios/api-models';

export interface QrCodeService {
  getAllQrCodes(): Promise<ApiResponse<string>>;

  getOneQrCode(): Promise<ApiResponse<string>>;

  createNewQrCode(): Promise<ApiResponse<string>>;

  updateOneQrCode(): Promise<ApiResponse<string>>;

  deleteOneQrCode(): Promise<ApiResponse<string>>;
}
