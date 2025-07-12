import { useClickCounter } from "../../../hooks/useClickCounter";

export function ComponentB() {
  const { clickCount, handleIncrement, handleDecrement } = useClickCounter();

  return (
    <div className="component component-b">
      <h2>Component B</h2>
      <p>I have buttons to modify the count</p>
      <div className="button-group">
        <button onClick={handleIncrement} className="btn-increment">
          + Increment
        </button>
        <button onClick={handleDecrement} className="btn-decrement">
          - Decrement
        </button>
      </div>
      <div className="display-box">
        <span className="count-display">Count: {clickCount}</span>
      </div>
      <p className="note">🤔 Why don't my buttons affect Component C?</p>
    </div>
  );
}
