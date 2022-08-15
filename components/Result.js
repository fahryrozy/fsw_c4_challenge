import { useEffect, useState } from "react";
import { gameRules } from "../shared/gamesRules";
import FooterButton from "./FooterButton";

function Result({
  isLoading,
  setIsLoading,
  selected,
  comSelected,
  setComSelected,
  setGameOver,
}) {
  const [result, setResult] = useState("");
  const randomInt = (n) => {
    return Math.floor(Math.random() * n);
  };

  useEffect(() => {
    console.log("Selected nya", selected);
    if (selected >= 0) {
      setIsLoading(true);
      const randomNum = randomInt(3);
      const userSelected = gameRules[selected].value;
      setComSelected(randomNum);

      setTimeout(() => {
        setGameOver(true);
        if (userSelected === gameRules[randomNum].beats) {
          setResult("COM WIN");
        } else {
          console.log(selected, comSelected);
          if (userSelected === gameRules[randomNum].value) {
            setResult("DRAW");
          } else {
            setResult("PLAYER 1 WIN");
          }
        }
        setIsLoading(false);
      }, 1000);
    }
  }, [selected]);

  if (isLoading) {
    return <FooterButton isLoading={true} />;
  } else {
    return (
      <div className="w-1/4">
        {selected < 0 ? (
          <div className="mx-auto p-5 sm:px-8 overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-wider text-red mx-auto text-center">
              VS
            </h2>
          </div>
        ) : (
          <div className="mx-auto p-3 py-5 sm:py-10 sm:px-3 items-center flex bg-green -rotate-20 overflow-hidden">
            <h2 className="font-bold tracking-wider text-white mx-auto text-center">
              {result}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default Result;
