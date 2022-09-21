import { Request, Response } from 'express';
import { ShortUrlService } from '../interfaces/shortener.service';
import { ShortUrlsService } from '../services/shortener.service';

export function ShortUrlController(
  service: ShortUrlService = ShortUrlsService
) {
  const getAllShortUrls = async (req: Request, res: Response) => {
    const codes = await service.getAllShortUrls();
    return res.send(codes);
  };

  const getOneShortUrl = async (req: Request, res: Response) => {
    const code = await service.getOneShortUrl();
    return res.send(code);
  };

  const createNewShortUrl = async (req: Request, res: Response) => {
    const { longUrl } = req.body;
    const newCode = await service.createNewShortUrl(longUrl);
    return res.send(newCode);
  };

  const updateOneShortUrl = async (req: Request, res: Response) => {
    const code = await service.updateOneShortUrl();
    return res.send(code);
  };

  const deleteOneShortUrl = async (req: Request, res: Response) => {
    const code = await service.deleteOneShortUrl();
    return res.send(code);
  };

  const shortened = async (req: Request, res: Response) => {
    try {
      // find a document match to the code in req.params.code
      //       const url = await UrlModel.findOne({
      //         urlCode: req.params.code,
      //       });

      //       if (url) {
      //         // when valid we perform a redirect
      //         return res.redirect(url.longUrl);
      //       } else {
      //         // else return a not found 404 status
      //         return res.status(404).json('No URL Found');
      //       }
      return res;
    } catch (err) {
      // exception handler
      console.error(err);
      res.status(500).json('Server Error');
    }
  };

  return {
    getAllShortUrls,
    getOneShortUrl,
    createNewShortUrl,
    updateOneShortUrl,
    deleteOneShortUrl,
    //     shortened
  };
}
