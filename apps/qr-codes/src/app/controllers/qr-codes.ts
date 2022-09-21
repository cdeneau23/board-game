import { Request, Response } from 'express';
import { QrCodeService } from '../interfaces/qr-code-service';
import { QrCodesService } from '../services/qr-codes';

export function QrCodesController(service: QrCodeService = QrCodesService) {
  const getAllQrCodes = async (req: Request, res: Response) => {
    const codes = await service.getAllQrCodes();
    return res.send(codes);
  };

  const getOneQrCode = async (req: Request, res: Response) => {
    const code = await service.getOneQrCode();
    return res.send(code);
  };

  const createNewQrCode = async (req: Request, res: Response) => {
    const newCode = await service.createNewQrCode();
    return res.send(newCode);
  };

  const updateOneQrCode = async (req: Request, res: Response) => {
    const code = await service.updateOneQrCode();
    return res.send(code);
  };

  const deleteOneQrCode = async (req: Request, res: Response) => {
    const code = await service.deleteOneQrCode();
    return res.send(code);
  };

  return {
    getAllQrCodes,
    getOneQrCode,
    createNewQrCode,
    updateOneQrCode,
    deleteOneQrCode
  };
}
