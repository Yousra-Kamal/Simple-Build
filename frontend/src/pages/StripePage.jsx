import { useCallback, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Navigate, Link } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
export const CheckoutForm = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("http://localhost:3001/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);
  const options = { fetchClientSecret };
  return (
    <div className="py-24" id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");
    console.log(sessionId);
    fetch(`http://localhost:3001/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);
  if (status === "open") {
    return <Navigate to="/checkout" />;
  }
  if (status === "complete") {
    return (
      <section className=" bg-gray-500 py-20" id="success">
        <div className=" flex min-h-full flex-1 flex-col items-center justify-center px-6 py-60 lg:px-8">
          <div className="mx-auto max-w-7xl  bg-white  rounded-3xl py-20 px-4 sm:px-6 lg:px-8">
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircleIcon
                    className="h-10 w-10 text-green-500 bg-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 ">
                  <h3 className="text-3xl font-serif mb-6 font-medium text-green-800">
                    Payment was successful.
                  </h3>
                  <div className="mt-2 text-green-700">
                    <p>
                      A confirmation email will be sent to
                      <span className=" text-green-700 ">{customerEmail}.</span>
                    </p>
                    <div className="mt-4">
                      If you have any questions, please email{" "}
                      <a
                        className=" text-green-700 "
                        href="mailto:orders@example.com"
                      >
                        SimpleBuild@email.com.
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="-mx-2 -my-1.5 flex">
                      <Link
                        to="/services"
                        className="text-green-600 text-sm font-semibold flex items-center mt-2.5"
                      >
                        <button
                          type="button"
                          className=" underline rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                        >
                          Back to Services
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

const StripePage = () => {
  return <div></div>;
};
export default StripePage;
