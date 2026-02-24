import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: 'price_1T4URm2diemRbUdrfpmipsxz', // Using the automatically generated Test Price ID
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/`,
            });

            res.status(200).json({ url: session.url });
        } catch (err) {
            console.error('Error creating checkout session:', err);
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
