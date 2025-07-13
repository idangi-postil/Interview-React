import { useState } from "react";
import { FixedSearchComponent } from "./FixedSearchComponent";
import { SearchComponent } from "./SearchComponent";

export function Question4() {
  const [showFixed, setShowFixed] = useState(false);

  return (
    <div className="question-container">
      <div className="question-header">
        <h2>Question 4: Search Performance & Debouncing</h2>
        <p className="question-description">
          Fix the performance issue in this search component. It makes too many
          API calls and needs proper debouncing to improve user experience and
          reduce server load.
        </p>
      </div>

      <div className="problem-section">
        <h3>🚨 The Problem</h3>
        <p>This search component has performance issues:</p>
        <ul>
          <li>Makes an API call for every single keystroke</li>
          <li>Causes excessive server load and poor performance</li>
          <li>No delay between user input and API requests</li>
          <li>Bad user experience with constant loading states</li>
        </ul>

        <div className="explanation">
          <h4>🎯 How to test:</h4>
          <ol>
            <li>Type quickly in the search box (try "hello world")</li>
            <li>Watch the API call counter increase rapidly</li>
            <li>Notice the constant loading states</li>
            <li>See how many unnecessary requests are made</li>
          </ol>
        </div>

        <div className="solution-hints">
          <h4>💡 Fix the issue by:</h4>
          <ul>
            <li>Implementing a debounce mechanism to delay API calls</li>
            <li>Only making requests after the user stops typing</li>
            <li>Cancelling previous requests when new ones start</li>
          </ul>
        </div>

        <div className="toggle-container">
          <button
            onClick={() => setShowFixed(!showFixed)}
            className={`toggle-btn ${
              showFixed ? "showing-solution" : "showing-problem"
            }`}
          >
            {showFixed ? "🐛 Show Problem Version" : "✅ Show Fixed Version"}
          </button>
        </div>
        <SearchComponent />
      </div>
    </div>
  );
}
