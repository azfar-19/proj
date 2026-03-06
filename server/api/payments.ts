// Payments API Endpoints

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amount, currency, paymentMethodId, customerId } = req.body;

    try {
      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method: paymentMethodId,
        customer: customerId,
        confirm: true,
      });

      return res.status(200).json(paymentIntent);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET') {
    try {
      // Retrieve all payment intents
      const paymentIntents = await stripe.paymentIntents.list();
      return res.status(200).json(paymentIntents);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}