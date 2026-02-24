import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

            res.status(200).json({
                status: session.status,
                customer_email: session.customer_details?.email
            });
        } catch (err) {
            console.error('Error retrieving session:', err);
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}
