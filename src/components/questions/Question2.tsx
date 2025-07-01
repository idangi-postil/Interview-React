import { AsyncStateComponent } from "../AsyncStateComponent";

export function Question2() {
  return (
    <div className="question-container">
      <div className="question-header">
        <h2>Question 2: Asynchronous State Updates</h2>
        <p className="question-description">
          Fix the bugs in the component below. The state updates are not working
          as expected. Pay attention to when and how state values are accessed
          after setState calls.
        </p>
      </div>

      <div className="problem-section">
        <h3>🚨 The Problem</h3>
        <p>The component has several bugs related to state in React</p>
        <ul>
          <li>Console logs show incorrect (old) values after state updates</li>
          <li>Multiple consecutive setState calls don't work as expected</li>
          <li>The log shows wrong values because it uses stale state</li>
        </ul>

        <div className="explanation">
          <h4>🎯 What to look for:</h4>
          <ul>
            <li>
              Click "🐛 Buggy Increment" and check the console - the logged
              value is always one behind
            </li>
            <li>
              Click "🐛 Buggy +3" multiple times - it only increments by 1, not
              3
            </li>
          </ul>
        </div>

        <AsyncStateComponent />
      </div>

      <div className="solution-section" style={{ display: "none" }}>
        <h3>✅ The Solution</h3>
        <p>Key concepts to understand:</p>
        <ul>
          <li>
            <strong>State updates are asynchronous</strong> - you can't
            immediately read the new value
          </li>
          <li>
            <strong>Use functional updates</strong> -{" "}
            <code>setState(prevState =&gt; newState)</code>
          </li>
          <li>
            <strong>Use useEffect</strong> to react to state changes
          </li>
          <li>
            <strong>
              Don't rely on state values immediately after setState
            </strong>
          </li>
        </ul>

        <div className="code-example">
          <h4>Wrong way:</h4>
          <pre>
            <code>{`setCount(count + 1);
console.log(count); // Shows OLD value!`}</code>
          </pre>

          <h4>Correct way:</h4>
          <pre>
            <code>{`setCount(prevCount => {
  const newCount = prevCount + 1;
  console.log(newCount); // Shows NEW value!
  return newCount;
});`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
