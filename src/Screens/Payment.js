import React from "react";
import "./CSS/register.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Components/Checkout";

export default function Payment({ location, history }) {
  const stripePromise = loadStripe(
    "pk_test_51HPDRdHciKBv1ntWsxnVf3HHzsqfOXaJh7BxIKzY7yDGMjyPEz1CM0h8Lm9wHwqxqmceCyZCvEvHP3UtpIqvD2dP00eJD03Olv"
  );
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm location={location} history={history} />
    </Elements>
  );
}
