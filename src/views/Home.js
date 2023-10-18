import React, { useState } from "react";

export default function Home({ onStartGame }) {
    const [userName, setUserName] = useState("");

    const handleStartGame = () => {
        if (userName) {
            onStartGame(userName);
        } else {
            alert("Por favor, ingrese su nombre");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h1 className="text-center">Memory Game </h1>
                            <div className="mb-3">
                                <label
                                    htmlFor="userName"
                                    className="form-label"
                                >
                                    Ingrese su nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userName"
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleStartGame}
                                >
                                    Iniciar juego
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
