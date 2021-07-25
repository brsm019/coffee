import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "../GlobalState/StateProvider";
import Header from "../Components/Header/Header";
import "./Checkout.css";

export default function Checkout() {
  const [{ basket, user, getBasketTotal }, dispatch] = useStateValue();

  console.log({ basket });
  console.log({ user });
  console.log({ getBasketTotal });

  let cartTotal = (basket) =>
    basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);
  console.log(cartTotal(basket));
  let total = cartTotal(basket).toFixed(2);
  console.log({ total });
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  console.log({ clientSecret });

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("http://localhost:4000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceTotal: total }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <div className="checkout">
      <Header />
      <div className="checkout__container">
        <div className="checkout__line">-----------------</div>
        <h1 className="checkout__header">PAYMENT</h1>
        <div className="checkout__line line2">-----------------</div>
        <h3 className="checkout__header">£{total}</h3>
        <form
          id="payment-form"
          className="checkout__payment__form"
          onSubmit={handleSubmit}
        >
          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          />
          <button disabled={processing || disabled || succeeded} id="submit">
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "PAY NOW"
              )}
            </span>
          </button>
          {/* Show any error that happens when processing the payment */}
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          {/* Show a success message upon completion */}
          <p className={succeeded ? "result-message" : "result-message hidden"}>
            Payment succeeded, see the result in your
            <a href={`https://dashboard.stripe.com/test/payments`}>
              {" "}
              Stripe dashboard.
            </a>{" "}
            Refresh the page to pay again.
          </p>
        </form>
      </div>
    </div>
  );
}
