import { ApiResponse } from '@two-dogs-studios/api-models';
import { QrCodeService } from '../interfaces/qr-code-service';
import QRCode = require('qrcode');

const getAllQrCodes = async (): Promise<ApiResponse<string>> => {
  try {
    const code = await QRCode.toDataURL('https://youtube.com');
    return { success: 'Valid', data: code };
  } catch (err) {
    console.error(err);
    return { success: 'Invalid', data: err.message };
  }
};

const getOneQrCode = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Get an existing QR code' };
};

const createNewQrCode = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Created QR code' };
};

const updateOneQrCode = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Update an existing QR code' };
};

const deleteOneQrCode = async (): Promise<ApiResponse<string>> => {
  return { success: 'Valid', data: 'Delete an existing QR code' };
};

export const QrCodesService: QrCodeService = {
  getAllQrCodes,
  getOneQrCode,
  createNewQrCode,
  updateOneQrCode,
  deleteOneQrCode,
};
