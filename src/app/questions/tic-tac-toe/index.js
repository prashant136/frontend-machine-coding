import React, { useState } from "react";
import useTikTokToe from "./hook/use-tik-tac-toe";
import "./style.css";

export default function TicTakToe() {
    const { board, handleClick, getStatusMessage, resetGame } = useTikTokToe();

    return (
        <div className='game'>
            <div className='status'>
                {getStatusMessage()}
                <button className='reset-button' onClick={resetGame}>
                    Reset Game
                </button>
            </div>

            <div className='board'>
                {board.map((b, index) => {
                    return (
                        <button
                            className='cell'
                            key={index}
                            onClick={() => handleClick(index)}
                            disabled={b !== null}
                        >
                            {b}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
