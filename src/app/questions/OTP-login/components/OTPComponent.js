import React, { useState } from "react";
import OTPfield from "./OTPfield";

export default function OTPComponent() {
    const [phone, setPhone] = useState();
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // phone validations
        const regex = /[^0-9]/g;
        if (phone.length < 10 || regex.test(phone)) {
            alert("Invalid Phone Number");
            return;
        }

        // call backend api
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        // call backend api
        console.log("login sucessful...");
    };

    return (
        <>
            {showOtpInput ? (
                <div>
                    <p>Enter OTP sent to {phone}</p>
                    <OTPfield length={4} onOtpSubmit={onOtpSubmit} />
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='phone number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                </form>
            )}
        </>
    );
}
