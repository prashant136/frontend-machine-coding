import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { tenureData } from "./utils/constant";
import TextInput from "./components/input";
import SliderInput from "./components/slider";

export default function EMICalculator() {
    const [cost, setCost] = useState(0);
    const [interest, setInterest] = useState(5);
    const [fee, setFee] = useState(1);
    const [downPayment, setDownPayment] = useState(0);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(0);

    const calculateEMI = (downPayment) => {
        if (!cost) return;

        const loanAmount = cost - downPayment;
        const rateofIntrest = interest / 100;
        const numberOfYears = tenure / 12;

        // EMI amount = [P x R x (1+R)^N] / [(1+R)^N-1]
        const EMI =
            (loanAmount *
                rateofIntrest *
                (1 + rateofIntrest) ** numberOfYears) /
            ((1 + rateofIntrest) ** numberOfYears - 1);
        return Number(EMI / 12).toFixed(0);
    };

    const updateEMI = (e) => {
        if (!cost) return;
        const dp = Number(e.target.value);
        setDownPayment(dp.toFixed(0));

        // calculate EMI and update it
        const emi = calculateEMI(dp);
        setEmi(emi);
    };

    const calculateDP = (emi) => {
        if (!cost) return;
        const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
        return Number((downPaymentPercent / 100) * cost).toFixed(0);
    };

    const updateDownPayment = (e) => {
        if (!cost) return;
        const emi = Number(e.target.value);
        setEmi(emi.toFixed(0));

        // calculate DownPayment and update it
        const dp = calculateDP(emi);
        setDownPayment(dp);
    };

    const totalDownPayment = () => {
        return (
            Number(downPayment) +
            (cost - downPayment) * (fee / 100)
        ).toFixed(0);
    };

    const totalEMI = () => {
        return Number(emi * tenure).toFixed(0);
    };

    useEffect(() => {
        if (!(cost > 0)) {
            setDownPayment(0);
            setEmi(0);
        }
        const emi = calculateEMI(downPayment);
        setEmi(emi);
    }, [tenure]);

    return (
        <div className={styles.app}>
            <span className={styles.emi_title}>EMI Calculator</span>

            <TextInput
                title='Total Cost of Asset'
                state={cost}
                onChange={(e) => setCost(e.target.value)}
            />
            <TextInput
                title='Interest Rate (in %)'
                state={interest}
                onChange={(e) => setInterest(e.target.value)}
            />
            <TextInput
                title='Processing Fee (in %)'
                state={fee}
                onChange={(e) => setFee(e.target.value)}
            />

            <SliderInput
                title={"Down Payment"}
                underlineTitle={`Total Down Payment- ${totalDownPayment()}`}
                state={downPayment}
                onChange={updateEMI}
                min={0}
                max={cost}
                labelMin={"0%"}
                labelMax={"100%"}
            />

            <SliderInput
                title={"Loan per Month"}
                underlineTitle={`Total EMI- ${totalEMI()}`}
                state={emi}
                onChange={updateDownPayment}
                min={calculateEMI(cost)}
                max={calculateEMI(0)}
                labelMin={calculateEMI(cost)}
                labelMax={calculateEMI(0)}
            />

            {/* tenure */}
            <span className={styles.title}>Tenure</span>
            <div className={styles.tenureContainer}>
                {tenureData.map((t) => {
                    return (
                        <button
                            key={t}
                            className={`${styles.tenure} ${
                                t === tenure ? styles.selected : ""
                            }`}
                            onClick={() => setTenure(t)}
                        >
                            {t}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
