import React, { useState } from "react";
import Question from "./components/question";
import { questionlist } from "./constants/questions";
import "./style.css";
import Result from "./components/Result";

export default function Quiz() {
    const [currentQuestion, setCurrQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);

    const handleQuestionNext = (isCorrect) => {
        setCurrQuestion(currentQuestion + 1);
        setUserAnswer([...userAnswer, isCorrect]);
    };

    const resetQuizFn = () => {
        setCurrQuestion(0);
        setUserAnswer([]);
    };

    return (
        <div className='app'>
            <h1>Quiz world</h1>

            {/* Question */}
            {currentQuestion < questionlist.length && (
                <Question
                    question={questionlist[currentQuestion]}
                    onAnswerClick={handleQuestionNext}
                />
            )}
            {/* Results */}
            {currentQuestion === questionlist.length && (
                <Result
                    userAnswer={userAnswer}
                    questionlist={questionlist}
                    resetQuizFn={resetQuizFn}
                />
            )}
        </div>
    );
}
