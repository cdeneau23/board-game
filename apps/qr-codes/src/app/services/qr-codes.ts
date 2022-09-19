import { ApiResponse } from "@two-dogs-studios/api-models";
import { QrCodeService } from "../interfaces/qr-code-service";

const getAllQrCodes = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Get all QR codes'};
};

const getOneQrCode = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Get an existing QR code'};
};

const createNewQrCode = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Create a new QR code'};
};

const updateOneQrCode = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Update an existing QR code'};
};

const deleteOneQrCode = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Delete an existing QR code'};
};

export const QrCodesService: QrCodeService = {
  getAllQrCodes,
  getOneQrCode,
  createNewQrCode,
  updateOneQrCode,
  deleteOneQrCode,
};
