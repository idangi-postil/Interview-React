import { AsyncStateComponent } from "./AsyncStateComponent";

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
    </div>
  );
}
