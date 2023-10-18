import React from "react";

export default function Scoreboard({ matches, errors }) {
    return (
        <div className="scoreboard">
            <div className="scoreboard__item d-flex justify-content-between">
                <p>Aciertos: {matches}</p>
                <p>Errores: {errors}</p>
            </div>
        </div>
    );
}
