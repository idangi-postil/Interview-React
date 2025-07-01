interface NavigationProps {
  currentQuestion: number;
  onQuestionChange: (questionNumber: number) => void;
}

export function Navigation({
  currentQuestion,
  onQuestionChange,
}: NavigationProps) {
  const questions = [
    { number: 1, title: "Q1: Component State Management" },
    { number: 2, title: "Q2: Asynchronous State Updates" },
    // Add more questions here as they are created
  ];

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h2>Interview Questions</h2>
      </div>
      <div className="nav-items">
        {questions.map((question) => (
          <button
            key={question.number}
            className={`nav-item ${
              currentQuestion === question.number ? "active" : ""
            }`}
            onClick={() => onQuestionChange(question.number)}
          >
            {question.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
