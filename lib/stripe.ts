import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
});

export default stripe;
//use helper function cause server action is not the safest thing to use, there is a method to use helper function behind next js
