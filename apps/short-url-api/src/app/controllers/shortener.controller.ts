import { Request, Response } from 'express';
import { ShortUrlService } from '../interfaces/shortener.service';
import { ShortUrlsService } from '../services/shortener.service';

export function ShortUrlController(
  service: ShortUrlService = ShortUrlsService
) {
  const getAllShortUrls = async (req: Request, res: Response) => {
    console.log(req.hostname);
    console.log(req.protocol)
    const codes = await service.getAllShortUrls();
    return res.send(codes);
  };

  const getOneShortUrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    const code = await service.getOneShortUrl(id);
    return res.send(code);
  };

  const createNewShortUrl = async (req: Request, res: Response) => {
    const { longUrl } = req.body;
    const newCode = await service.createNewShortUrl(longUrl);
    return res.send(newCode);
  };

  const updateOneShortUrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    const code = await service.updateOneShortUrl(id, req.body);
    return res.send(code);
  };

  const deleteOneShortUrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    const code = await service.deleteOneShortUrl(id);
    return res.send(code);
  };

  return {
    getAllShortUrls,
    getOneShortUrl,
    createNewShortUrl,
    updateOneShortUrl,
    deleteOneShortUrl,
  };
}
