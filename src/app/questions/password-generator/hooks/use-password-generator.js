import React, { useState } from "react";

export default function usePasswordGenerator() {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generatePassword = (checkboxData, length) => {
        let charset = "",
            tempPassword = "";

        // which checkboxes are selected.
        const selectedOption = checkboxData.filter(
            (checkbox) => checkbox.state
        );

        // if no checkbox is selected. show errorMessage and return
        if (!selectedOption.length) {
            setErrorMessage("Select at least one option.");
            setPassword("");
            return;
        }

        selectedOption.forEach((option) => {
            switch (option.title) {
                case "Include Uppercase Letters":
                    charset += charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset += "0123456789";
                    break;
                case "Include Symbols":
                    charset += "!@#$%^&*()";
                    break;
                default:
                    break;
            }
        });

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            tempPassword += charset[randomIndex];
        }
        setPassword(tempPassword);
        setErrorMessage("");
    };

    return { password, errorMessage, generatePassword };
}
