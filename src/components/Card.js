import React, { useState } from "react";
import questionmark from "../assets/questionmark.png";
import "./Card.css";

export default function Card({ cardImage, isFlipped, onClick }) {
    return (
        <div
            className={`card ${isFlipped ? "card__flipped" : ""}`}
            onClick={onClick}
        >
            <div className="card__inner">
                <div className="card__front">
                    {isFlipped ? (
                        <img
                            src={cardImage}
                            alt="card__front"
                            className="img-fluid rounded"
                        />
                    ) : (
                        <div className="card__back">
                            <img
                                src={questionmark}
                                className="img-fluid rounded"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
