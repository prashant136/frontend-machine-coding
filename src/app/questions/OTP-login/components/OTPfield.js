import React, { useState, useEffect, useRef } from "react";

export default function OTPfield({ length = 4, onOtpSubmit = () => {} }) {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    let inputRef = useRef([]);

    const handleOnChange = (index, e) => {
        const val = e.target.value;

        let newOtp = [...otp];
        newOtp[index] = val.substring(val.length - 1);
        setOtp(newOtp);

        // payload sent to backend api
        const combineOtp = newOtp.join("");
        if (combineOtp.length === length) {
            onOtpSubmit(combineOtp);
        }

        // move to next input if current field is filled
        if (val && index - 1 < length && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus();
        }
    };

    const handleOnClick = (index) => {
        inputRef.current[index].setSelectionRange(1, 1);
    };

    const handleKeyDown = (index, e) => {
        // e.key ---- 'Backspace', 'Enter', 'Escape', 'Shift', 'CapsLock', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Alt' etc...
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRef.current[index - 1]
        ) {
            // move focus to previous input field on backsapce
            inputRef.current[index - 1].focus();
        }
    };

    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }, []);

    return (
        <div>
            {otp.map((val, index) => {
                return (
                    <input
                        key={index}
                        ref={(arg) => {
                            inputRef.current[index] = arg;
                        }}
                        className='otp-input'
                        type='text'
                        value={val}
                        onChange={(e) => handleOnChange(index, e)}
                        onClick={() => handleOnClick(index)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                    />
                );
            })}

            {/* ----------------------------- */}
            {/* <input
                ref={(arg) => {
                    inputRef.current = arg;
                }}
                // ref={inputRef}    ✅ both are same way to assign ref to JSX 
                value={''}
                type='text'
                onChange={() => {}}
            /> */}
        </div>
    );
}
