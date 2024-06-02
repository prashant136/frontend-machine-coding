import React from "react";
import CheckoutStepper from "./components/CheckoutStepper";
import { CHECKOUT_STEPS } from "./config";

import "./style.css";

export default function Stepper() {
    return (
        <div>
            <h2>Checkout</h2>
            <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
        </div>
    );
}
