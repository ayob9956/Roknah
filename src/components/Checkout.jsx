import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm.jsx';

const initStripe = async () => {
  const res = await axios.get("/api/publishable-key");
  const publishableKey = await res.data.publishable_key;

  return loadStripe(publishableKey);
};

const Checkout = () => {
  const stripePromise = initStripe();

  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await axios.post("/api/create-payment-intent", {});

      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }

    createPaymentIntent();
  }, []);

  return (

    <div className="w-full flex flex-col mt-20">
      <div className="w-full  flex justify-center ">
      {clientSecretSettings.loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="shadow-md border p-5 rounded-md bg-[#d7dade29]">
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecretSettings.clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          <CheckoutForm />
        </Elements>
        </div>
      )}
    </div>
    </div>
  );
};

export default Checkout;