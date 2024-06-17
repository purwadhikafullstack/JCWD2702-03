import { Router, Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.post('/create-payment', async (req: Request, res: Response) => {
  const { amount, orderId } = req.body;
  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  const baseUrl = 'https://api.sandbox.midtrans.com/v1';

  try {
    const response = await axios.post(
      `${baseUrl}/payment-links`,
      {
        transaction_details: {
          order_id: orderId,
          gross_amount: amount,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(serverKey + ':').toString('base64')}`,
        },
      },
    );

    res.status(200).json({ payment_url: response.data.payment_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating payment link' });
  }
});

export default router;