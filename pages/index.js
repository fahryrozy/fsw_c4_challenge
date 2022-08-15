import styles from "../styles/Home.module.css";

import PlayerButton from "../components/PlayerButton";
import Result from "../components/Result";
import { useState } from "react";
import FooterButton from "../components/FooterButton";

export default function Home() {
  const [selected, setSelected] = useState(-1);
  const [comSelected, setComSelected] = useState(-1);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="w-full bg-brown">
      <div className="max-w-full sm:max-w-lg mx-auto overflow-hidden">
        <div className="flex mx-auto sm:py-2 sm:px-6 justify-center items-center grid-cols-3 gap-x-5 overflow-hidden">
          <PlayerButton
            selected={selected}
            setSelected={setSelected}
            gameOver={gameOver}
            playerName="Player 1"
          />
          <Result
            selected={selected}
            setSelected={setSelected}
            comSelected={comSelected}
            setComSelected={setComSelected}
            gameOver={gameOver}
            setGameOver={setGameOver}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <PlayerButton
            comSelected={comSelected}
            setComSelected={setComSelected}
          />
        </div>
        {!isLoading && (
          <FooterButton
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setGameOver={setGameOver}
            setSelected={setSelected}
            setCompSelected={setComSelected}
          />
        )}
      </div>
    </div>
  );
}
