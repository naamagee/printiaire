import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { price, quantity = 1, usernames } = await request.json();

    // Get the origin for success/cancel URLs
    const origin = request.headers.get('origin') || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'PRINTIAIRE',
              metadata: {
                business_name: 'COLON3 LLC',
                pinterest_username: usernames.pinterest,
                substack_username: usernames.substack
              }
            },
            unit_amount: Math.round(price * 100), // Stripe expects amount in cents
          },
          quantity,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`,
      payment_intent_data: {
        statement_descriptor: 'COLON3 LLC', // Max 22 characters
        statement_descriptor_suffix: 'PRINTIAIRE', // Max 12 characters
      },
      custom_text: {
        submit: {
          message: 'We\'ll send your custom magazine once the payment is processed.'
        }
        },
        metadata: {
            pinterest_username: usernames.pinterest,
            substack_username: usernames.substack
        }
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}