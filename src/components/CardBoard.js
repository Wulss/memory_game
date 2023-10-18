import React, { useEffect, useState } from "react";
import Card from "./Card";
import { shuffleArray } from "../utils/shuffleArray";

export default function CardBoard({
    images,
    matches,
    errors,
    setMatches,
    setErrors,
    gameReset,
}) {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);

    useEffect(() => {
        const initialCards = [...images, ...images];
        setCards(shuffleArray(initialCards));
        setFlipped([]);
        setSolved([]);
    }, [images, gameReset]);

    const handleCardClick = (index) => {
        if (flipped.length === 2 && solved.includes(index)) {
            return;
        }

        if (flipped.length === 0) {
            setFlipped([index]);
        } else if (flipped.length === 1) {
            if (index === flipped[0]) {
                return;
            }
            setFlipped([flipped[0], index]);

            if (cards[flipped[0]] === cards[index]) {
                setSolved([...solved, flipped[0], index]);
                setMatches(matches + 1);
            } else {
                setErrors(errors + 1);
            }

            setTimeout(() => {
                setFlipped([]);
            }, 1000);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <div className="card-board row row-cols-5">
                        {cards.map((card, index) => (
                            <div className="p-2">
                                <Card
                                    key={index}
                                    cardImage={card}
                                    isFlipped={
                                        flipped.includes(index) ||
                                        solved.includes(index)
                                    }
                                    onClick={() => handleCardClick(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
