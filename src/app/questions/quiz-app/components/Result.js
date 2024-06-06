import React from "react";

export default function Result({
    userAnswer,
    questionlist,
    resetQuizFn = () => {}
}) {
    const correctAnswers = userAnswer.filter((ans) => ans).length;
    return (
        <div className='results'>
            <h2>Results</h2>
            <p>
                You answered {correctAnswers} out of {questionlist.length}{" "}
                questions
                <span onClick={resetQuizFn}> Click here to reset</span>
            </p>
            <ul>
                {questionlist.map((ques, index) => {
                    return (
                        <li key={index} data-correct={userAnswer[index]}>
                            Q{index + 1}. {ques.question}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
