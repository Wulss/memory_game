import React, { useEffect, useState } from "react";
import CardBoard from "../components/CardBoard";
import { fetchImages } from "../api";
import Scoreboard from "../components/Scoreboard";

export default function Game({ userName }) {
    const [images, setImages] = useState([]);
    const [matches, setMatches] = useState(0);
    const [errors, setErrors] = useState(0);
    const [level, setLevel] = useState("easy");
    const [isGameCompleted, setIsGameCompleted] = useState(false);
    const [gameReset, setGameReset] = useState(false);

    useEffect(() => {
        const cards = handleLevelChange(level);
        fetchImages().then((data) => {
            const images = data.entries.map((entry) => entry.fields.image.url);
            setImages(images.slice(0, cards));
            setGameReset(!gameReset);
        });
    }, [level]);

    useEffect(() => {
        if (images.length > 0 && matches === images.length) {
            setIsGameCompleted(true);
        }
    }, [matches, images]);

    const handleLevelChange = (level) => {
        setMatches(0);
        setErrors(0);
        switch (level) {
            case "easy":
                return 5;
            case "medium":
                return 10;
            case "hard":
                return 20;
        }
    };

    const handleReset = () => {
        setMatches(0);
        setErrors(0);
        setIsGameCompleted(false);
        setGameReset(!gameReset);
    };

    return (
        <div className="container">
            <Scoreboard matches={matches} errors={errors} />
            <CardBoard
                images={images}
                matches={matches}
                errors={errors}
                setMatches={setMatches}
                setErrors={setErrors}
                gameReset={gameReset}
            />
            <div className="level-selector mt-4">
                <div className="btn-group">
                    <button
                        className={`btn btn-primary me-2 ${
                            level === "easy" ? "active" : ""
                        }`}
                        onClick={() => setLevel("easy")}
                    >
                        Fácil (5 Cartas)
                    </button>
                    <button
                        className={`btn btn-primary me-2 ${
                            level === "medium" ? "active" : ""
                        }`}
                        onClick={() => setLevel("medium")}
                    >
                        Medio (10 Cartas)
                    </button>
                    <button
                        className={`btn btn-primary ${
                            level === "hard" ? "active" : ""
                        }`}
                        onClick={() => setLevel("hard")}
                    >
                        Difícil (20 Cartas)
                    </button>
                </div>
            </div>
            <button
                className="btn btn-primary mt-3 me-3 mb-4"
                onClick={handleReset}
            >
                Reiniciar el juego
            </button>
            {isGameCompleted && (
                <div className="mt-5 text-center">
                    <h2>Felicitaciones, {userName}!</h2>
                    <p>Has completado el juego con éxito.</p>
                </div>
            )}
        </div>
    );
}
