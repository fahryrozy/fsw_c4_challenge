import { RefreshIcon } from "@heroicons/react/outline";
import style from "../styles/Home.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FooterButton({
  isLoading,
  setGameOver,
  setSelected,
  setCompSelected,
  setIsLoading,
}) {
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGameOver(false);
      setSelected(-1);
      setCompSelected(-1);
      setIsLoading(false);
    }, 300);
  };
  return (
    <div
      className={classNames(
        "w-1/4 flex justify-center cursor-pointer mx-auto overflow-hidden",
        isLoading ? style.rotating : ""
      )}
      onClick={handleClick}
    >
      <RefreshIcon className="block h-20 w-20" aria-hidden="true" />
    </div>
  );
}

export default FooterButton;
