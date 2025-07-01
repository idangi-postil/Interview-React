import { useClickCounter } from "../hooks/useClickCounter";

export function ComponentC() {
  const { clickCount } = useClickCounter();

  return (
    <div className="component component-c">
      <h2>Component C</h2>
      <p>I only watch the click count</p>
      <div className="display-box">
        <span className="count-display">Count: {clickCount}</span>
      </div>
      <p className="note">📖 This component only reads the state</p>
    </div>
  );
}
