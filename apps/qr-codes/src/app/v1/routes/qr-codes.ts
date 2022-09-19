import express = require('express');
import { QrCodesController } from '../../controllers/qr-codes';

const router = express.Router();

router.get('/', QrCodesController().getAllQrCodes);

router.get('/:id', QrCodesController().getOneQrCode);

router.post('/', QrCodesController().createNewQrCode);

router.patch('/:id', QrCodesController().updateOneQrCode);

router.delete('/:id', QrCodesController().deleteOneQrCode);

export const QrCodeRoutes = router;
