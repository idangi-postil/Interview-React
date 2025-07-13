import { useState } from "react";

export function AsyncStateComponent() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const handleBuggyIncrement = () => {
    setCount(count + 1);

    console.log("Current count after increment:", count);

    setLog((prevLog) => [
      ...prevLog,
      `Count is now: ${count + 1} (but actually shows: ${count})`,
    ]);
  };

  const handleMultipleIncrements = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    setLog((prevLog) => [
      ...prevLog,
      `Tried to increment by 3, but count is still: ${count}`,
    ]);
  };

  const clearLog = () => {
    setCount(0);
    setLog([]);
  };

  return (
    <div className="component async-state-component">
      <h2>Async State Bug Demo</h2>
      <p>
        Current Count: <span className="count-display">{count}</span>
      </p>

      <div className="button-group">
        <button className="btn-increment" onClick={handleBuggyIncrement}>
          🐛 Buggy Increment
        </button>

        <button className="btn-increment" onClick={handleMultipleIncrements}>
          🐛 Buggy +3
        </button>
      </div>

      <button className="btn-decrement" onClick={clearLog}>
        Clear Log
      </button>

      <div className="display-box">
        <h4>State Update Log:</h4>
        <div className="log-container">
          {log.length === 0 ? (
            <p className="note">
              Click buttons above to see the difference between buggy and
              correct state updates
            </p>
          ) : (
            log.map((entry, index) => (
              <div key={index} className="log-entry">
                {entry}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="note">
        <strong>
          💡 Open your browser's console to see the logged values!
        </strong>
      </div>
    </div>
  );
}
