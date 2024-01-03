import React, {useState} from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'http://localhost:4242/ticket',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };


  const completeReservation=()=>{

    const ReservationId = localStorage.getItem("ReservationId");
    axios.put(`https://658c45f8859b3491d3f5d2ff.mockapi.io/Reservation/${ReservationId}`, {
      paymentStatus : "complete"
  });


  const ParkingId = localStorage.getItem("parkingId");
  axios.put(`https://658c45f8859b3491d3f5d2ff.mockapi.io/Parking/${ParkingId}`, {
    status : "notAvailable"
});

  }
  

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
      <PaymentElement />
      <button onClick={completeReservation} className='btn btn-primary' disabled={!stripe}>شراء الان</button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
};

export default CheckoutForm;