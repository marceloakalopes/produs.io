
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Create a new checkout session for the user
 * @param {NextRequest} request - Request object
 * @returns - URL to redirect the user to
 */
export async function POST(request: Request) {
    const body = await request.json();

    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        success_url: `${request.headers.get('origin')}/stripe-success`,
        cancel_url: `${request.headers.get('origin')}/stripe-cancel`,
        line_items: [{
            price: body.priceId, // Price ID for the product
            quantity: 1,
        }],
        metadata: {
            user_id: body.userId,
            email: body.email,
            // Include other metadata if necessary
        },
        customer_email: body.email,
    });

    return NextResponse.json({ url: session.url });
}
