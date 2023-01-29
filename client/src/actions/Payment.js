async function createPaymentIntent(total, setClientSecret) {
  try {
    const res = await window.fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceTotal: total }),
    });
    const data = await res.json();
    setClientSecret(data.clientSecret);
  } catch (error) {
    console.error(error);
  }
}

export { createPaymentIntent };
