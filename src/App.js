import "./App.css";
import Game from "./views/Game";
import Home from "./views/Home";
import { useState } from "react";

function App() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [userName, setUserName] = useState("");

    const handleStartGame = (userName) => {
        setIsGameStarted(true);
        setUserName(userName);
    };
    return (
        <div className="App">
            <div className="App-header">
                {isGameStarted ? (
                    <Game userName={userName} />
                ) : (
                    <Home onStartGame={handleStartGame} />
                )}
            </div>
        </div>
    );
}

export default App;
