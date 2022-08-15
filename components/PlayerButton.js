import Image from "next/image";
import { useState } from "react";
import { gameRules } from "../shared/gamesRules";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PlayerButton({
  playerName,
  selected,
  setSelected,
  comSelected,
  gameOver,
}) {
  return (
    <div className="w-1/3 px-0 mx-auto items-center overflow-hidden">
      <h2 className="text-2xl sm:text-xl mx-auto w-28 font-bold tracking-wide sm:tracking-widest text-black text-center">
        {playerName ? playerName : "COM"}
      </h2>

      <ul className="grid grid-rows-3 py-2 gap-y-10 sm:gap-y-1">
        {gameRules.map((item, index) => {
          if (playerName) {
            return (
              <li
                key={index}
                onClick={gameOver ? () => {} : () => setSelected(index)}
                className={classNames(
                  selected === index
                    ? "max-w-fit max-h-fit mx-auto sm:max-w-xs bg-gray rounded-lg"
                    : "max-w-fit max-h-fit mx-auto sm:max-w-xs ",
                  gameOver
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray hover:rounded-lg"
                )}
              >
                <Image
                  src={item.image}
                  className="w-full object-contain h-full"
                  alt={item.value}
                  width={125}
                  height={125}
                />
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className={
                  comSelected === index
                    ? "max-w-fit max-h-fit mx-auto sm:max-w-xs bg-gray rounded-lg"
                    : "max-w-fit max-h-fit mx-auto sm:max-w-xs cursor-not-allowed"
                }
              >
                <Image
                  src={item.image}
                  className="w-full object-contain h-full"
                  alt={item.value}
                  width={125}
                  height={125}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default PlayerButton;
