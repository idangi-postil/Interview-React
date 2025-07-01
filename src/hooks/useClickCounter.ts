import { useState } from "react";

export function useClickCounter() {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleIncrement = () => {
    setClickCount((prev: number) => prev + 1);
  };

  const handleDecrement = () => {
    setClickCount((prev: number) => prev - 1);
  };

  return {
    clickCount,
    handleIncrement,
    handleDecrement,
  };
}
