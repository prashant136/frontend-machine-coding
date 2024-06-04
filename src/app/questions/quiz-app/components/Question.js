import React from "react";

export default function Question({ question, onAnswerClick }) {
    return (
        <div className='questions'>
            <h2>{question.question}</h2>
            <ul className='ans-options'>
                {question.answerOptions.map((item, index) => {
                    return (
                        <li
                            key={item.text}
                            onClick={() => onAnswerClick(item.isCorrect)}
                        >
                            {item.text}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
