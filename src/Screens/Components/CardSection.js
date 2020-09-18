import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { TextField, Button, Divider } from "@material-ui/core";
import "../CSS/register.css";
const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      padding: "10%",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <label className="label2">
      Card details
      {"\n"}
      <Divider light={false} variant="fullWidth" />
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  );
}

export default CardSection;
