import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CardSection from "./CardSection";
import "../CSS/register.css";
import axios from "axios";

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const [text, setText] = useState("");
  const handleSubmit = async (event) => {
    console.log(props.location.state.customerID);
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      addDetails(props.location.state.customerID, result.token.id);
      console.log(result.token.id);
    }
  };

  const addDetails = async (ID, token) => {
    setText("Loading...");
    await axios
      .post(
        "https://cors-anywhere.herokuapp.com/http://sql-test-api.herokuapp.com/createMethod",
        {
          token: token,
          customerID: ID,
        }
      )
      .then(async (response) => {
        console.log(response);
        await axios
          .post(
            "https://cors-anywhere.herokuapp.com/http://sql-test-api.herokuapp.com/createSub",
            {
              customerID: ID,
              paymentID: response.data.id,
            }
          )
          .then((resp) => {
            console.log(resp);
            props.history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fullBody">
      <div className="container">
        <form onSubmit={handleSubmit} className="formContainer">
          <CardSection />
          <button className="button" disabled={!stripe}>
            CONFIRM
          </button>
        </form>
        {text}
      </div>
    </div>
  );
}
