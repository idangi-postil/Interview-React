import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";

export function ComponentA() {
  return (
    <div className="component-a">
      <h1>React Interview Challenge</h1>

      <div className="problem-section">
        <h2>🚨 The Problem</h2>
        <h3>Component A</h3>
        <div className="components-container">
          <ComponentB />
          <ComponentC />
        </div>
      </div>
    </div>
  );
}
