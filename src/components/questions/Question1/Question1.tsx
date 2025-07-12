import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";

export function Question1() {
  return (
    <div className="question-container">
      <div className="question-header">
        <h2>Question 1: Component State Management</h2>
        <p className="question-description">
          Fix the state sharing issue between ComponentB and ComponentC. The
          components should share the same counter state.
        </p>
      </div>

      <div className="problem-section">
        <h3>🚨 The Problem</h3>

        <div className="components-container">
          <ComponentB />
          <ComponentC />
        </div>
      </div>
    </div>
  );
}
