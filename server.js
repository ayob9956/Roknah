import dotenv from 'dotenv';
import Fastify from 'fastify';
import Stripe from 'stripe';

dotenv.config();

// Instantiate Fastify
const fastify = Fastify({ logger: true });

// Initialize Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Fetch the publishable key to initialize Stripe.js
fastify.get("/publishable-key", async () => {
  return { publishable_key: process.env.STRIPE_PUBLISHABLE_KEY };
});

// Create a payment intent and return its client secret
fastify.post("/create-payment-intent", async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "eur",
    payment_method_types: ["bancontact", "card"],
  });

  return { client_secret: paymentIntent.client_secret };
});

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 5252 });
    console.log("Server listening on port 5252");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
