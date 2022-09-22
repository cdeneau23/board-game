import { Request, Response } from 'express';
import { UrlModel } from '../../mongo/short-urls';

const redirect = async (req: Request, res: Response) => {
  try {
    //   find a document match to the code in req.params.code
    const url = await UrlModel.findOne({
      urlCode: req.params.code,
    });

    if (url) {
      // when valid we perform a redirect
      return res.redirect(url.longUrl);
    } else {
      // else return a not found 404 status
      return res.status(404).json('No URL Found');
    }
    return res;
  } catch (err) {
    // exception handler
    console.error(err);
    res.status(500).json('Server Error');
  }
};

export const Redirect = {
  redirect,
};
