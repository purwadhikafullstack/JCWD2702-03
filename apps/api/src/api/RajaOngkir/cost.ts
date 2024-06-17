import { Request, Response, Router } from 'express';
import request from 'request';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const router = Router();
router.use(bodyParser.json());

router.post('/', async (req: Request, res: Response) => {
  const { origin, destination, weight, courier } = req.body;

  const options = {
    method: 'POST',
    url: 'https://api.rajaongkir.com/starter/cost',
    headers: {
      key: process.env.RAJAONGKIR_API_KEY,
      'content-type': 'application/x-www-form-urlencoded',
    },
    form: { origin, destination, weight, courier },
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