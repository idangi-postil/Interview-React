import { DataFetcherComponent } from "./DataFetcherComponent";

export function Question3() {
  return (
    <div className="question-container">
      <div className="question-header">
        <h2>Question 3: Data Fetching & Component Behavior</h2>
        <p className="question-description">
          This component fetches user data and provides filtering/sorting
          functionality. However, there are several performance and behavior
          issues that need to be fixed.
        </p>
      </div>

      <div className="problem-section">
        <h3>🚨 The Problem</h3>
        <p>
          The component has multiple issues that affect performance and user
          experience:
        </p>
        <ul>
          <li>The page seems to be making too many API calls</li>
          <li>Performance becomes poor as you interact with the component</li>
          <li>Some functionality doesn't work as expected</li>
          <li>Check the browser console to see what's happening</li>
        </ul>

        <div className="explanation">
          <h4>🎯 Instructions:</h4>
          <ul>
            <li>
              Open your browser's Developer Tools and check the Console tab
            </li>
            <li>Try typing in the search box</li>
            <li>Try clicking the sort button</li>
            <li>Observe the network activity and console output</li>
            <li>Identify and fix the root causes of the issues</li>
          </ul>
        </div>

        <DataFetcherComponent />
      </div>
    </div>
  );
}
