import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Question1 } from "./components/questions/Question1";
import "./components/InterviewStyles.css";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return <Question1 />;
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
