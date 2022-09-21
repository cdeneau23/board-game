import express = require('express');
import { ShortUrlController } from '../../controllers/shortener.controller';

const router = express.Router();

router.get('/', ShortUrlController().getAllShortUrls);

router.get('/:id', ShortUrlController().getOneShortUrl);

router.post('/', ShortUrlController().createNewShortUrl);

router.patch('/:id', ShortUrlController().updateOneShortUrl);

router.delete('/:id', ShortUrlController().deleteOneShortUrl);

export const ShortUrlRoutes = router;
