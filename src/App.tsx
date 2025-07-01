import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Question1 } from "./components/questions/Question1";
import { Question2 } from "./components/questions/Question2";
import { Question3 } from "./components/questions/Question3";
import "./components/InterviewStyles.css";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return <Question1 />;
      case 2:
        return <Question2 />;
      case 3:
        return <Question3 />;
      default:
        return <Question1 />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Interview Challenge</h1>
      </header>
      <div className="app-content">
        <Navigation
          currentQuestion={currentQuestion}
          onQuestionChange={setCurrentQuestion}
        />
        <main className="main-content">{renderQuestion()}</main>
      </div>
    </div>
  );
}

export default App;
