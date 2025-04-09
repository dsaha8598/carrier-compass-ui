import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader"; // Adjust this path if needed

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizHistory, setQuizHistory] = useState(() => JSON.parse(localStorage.getItem("quizHistory")) || []);
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
  const [showHistory, setShowHistory] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questionsPerPage = 10;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=50&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = response.data.results.map((q) => {
          const answers = [...q.incorrect_answers];
          const randomIndex = Math.floor(Math.random() * (answers.length + 1));
          answers.splice(randomIndex, 0, q.correct_answer);
          return {
            question: q.question,
            correct_answer: q.correct_answer,
            answers,
          };
        });
        setQuestions(data);
        setShowAnswers(false);
        setScore(0);
        setCurrentPage(0);
        setSelectedAnswers({});
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [category, difficulty]);

  const handleAnswer = (isCorrect, questionIndex, selectedIndex) => {
    if (!showAnswers) {
      if (isCorrect) setScore(score + 1);
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIndex]: selectedIndex,
      }));
    }
  };

  const handleSubmit = () => {
    const newRecord = {
      score,
      total: questions.length,
      date: new Date().toLocaleString(),
    };
    const updatedHistory = [newRecord, ...quizHistory];
    setQuizHistory(updatedHistory);
    localStorage.setItem("quizHistory", JSON.stringify(updatedHistory));
    setShowAnswers(true);
  };

  const handleReset = () => {
    setCurrentPage(0);
    setScore(0);
    setShowAnswers(false);
    setSelectedAnswers({});
  };

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const getScoreColor = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage < 50) return "text-red-600";
    if (percentage < 70) return "text-orange-500";
    return "text-green-600";
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-left">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600 drop-shadow">🎯 Quiz Practice</h1>

      <div className="mb-6 flex flex-wrap gap-4 items-center justify-start">
        <label className="font-semibold">Category:</label>
        <select
          className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="9">General Knowledge</option>
          <option value="18">Science: Computers</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
        </select>

        <label className="font-semibold">Difficulty:</label>
        <select
          className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 shadow"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Hide History" : "View History"}
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 shadow"
          onClick={handleReset}
        >
          Reset Quiz
        </button>
      </div>

      {showHistory && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📜 Quiz History</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quizHistory.map((record, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
              >
                <p className={`text-lg font-bold ${getScoreColor(record.score, record.total)}`}>
                  Score: {record.score}/{record.total}
                </p>
                <p className="text-sm text-gray-600">{record.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-8">
        {currentQuestions.map((q, idx) => {
          const questionIndex = currentPage * questionsPerPage + idx;
          return (
            <div key={idx} className="bg-white shadow-lg p-6 rounded-lg border border-orange-100">
              <h2
                className="font-semibold mb-4 text-lg text-orange-800"
                dangerouslySetInnerHTML={{ __html: `${questionIndex + 1}. ${q.question}` }}
              />
              <div className="grid gap-3">
                {q.answers.map((answer, i) => {
                  const isCorrect = answer === q.correct_answer;
                  const isSelected = selectedAnswers[questionIndex] === i;
                  const selectedBg = isSelected && !showAnswers ? "bg-orange-200 border-orange-500" : "";
                  const resultBg = showAnswers
                    ? isCorrect
                      ? "bg-green-200"
                      : isSelected
                      ? "bg-red-200"
                      : ""
                    : "";

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(isCorrect, questionIndex, i)}
                      className={`border p-3 rounded text-left transition-all duration-200 ease-in-out hover:bg-lime-200 ${selectedBg} ${resultBg}`}
                      dangerouslySetInnerHTML={{ __html: answer }}
                      disabled={showAnswers}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-between">
        {currentPage > 0 && (
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 shadow"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}

        {currentPage < Math.floor(questions.length / questionsPerPage) && (
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 shadow"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}

        {currentPage >= Math.floor(questions.length / questionsPerPage) && !showAnswers && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 shadow"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>

      {showAnswers && (
        <div className={`mt-6 text-2xl font-semibold ${getScoreColor(score, questions.length)}`}>
          ✅ Your score: {score}/{questions.length}
        </div>
      )}
    </div>
  );
};

export default QuizApp;