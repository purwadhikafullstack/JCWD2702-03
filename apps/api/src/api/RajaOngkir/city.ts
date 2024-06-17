import { Request, Response, Router } from 'express';
import request from 'request';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const options = {
    method: 'GET',
    url: 'https://api.rajaongkir.com/starter/city',
    headers: { key: process.env.RAJAONGKIR_API_KEY },
  };

  new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) {
        resolve(
          res
            .status(500)
            .json({ message: 'Internal Server Error', data: error }),
        );
        return;
      }

      resolve(
        res.status(200).json({ message: 'Success', data: JSON.parse(body) }),
      );
    });
  });
});

export default router;