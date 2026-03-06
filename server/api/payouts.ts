// Payouts API Endpoints

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amount, currency, destination } = req.body;

    try {
      // Create a transfer (payout)
      const transfer = await stripe.transfers.create({
        amount,
        currency,
        destination,
      });

      return res.status(200).json(transfer);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET') {
    try {
      // Retrieve all transfers
      const transfers = await stripe.transfers.list();
      return res.status(200).json(transfers);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}