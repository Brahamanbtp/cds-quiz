"use client";

import { ArrowLeft, Check, X, RefreshCw, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useQuiz } from "@/hooks/useQuiz";

export default function QuizPage({
  params,
}: {
  params: Promise<{ category: string; topic: string }>;
}) {
  const { category, topic } = use(params);
  const {
    questions,
    userAnswers,
    quizCompleted,
    score,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    loading,
    error,
    handleAnswerSelect,
    handleQuizSubmit,
    handleRedoQuiz,
  } = useQuiz(category, topic);

  const [categoryTitle, setCategoryTitle] = useState("");

  const categoryTitles: Record<string, string> = {
    english: "English",
    gk: "General Knowledge",
    maths: "Elementary Mathematics",
  };

  useEffect(() => {
    setCategoryTitle(categoryTitles[category] || category);
  }, [category]);

  const topicTitle =
    topic === "all" ? "All Years" : /^\d{4}$/.test(topic) ? `Year ${topic}` : topic;

  const formatQuestion = (question: string) => {
    return question
      .replace(/-->/g, "→")
      .replace(/"([^"]*)"/g, '"<i>$1</i>"')
      .replace(/$Fill in the blanks?$/i, "");
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (quizCompleted || questions.length === 0) return;

      const currentQ = questions[currentQuestionIndex];
      if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIndex = parseInt(e.key) - 1;
        if (currentQ.options[optionIndex]) {
          handleAnswerSelect(currentQuestionIndex, currentQ.options[optionIndex]);
        }
      } else if (e.key === 'Enter') {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        } else {
          handleQuizSubmit();
        }
      } else if (e.key === 'ArrowRight') {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quizCompleted, currentQuestionIndex, questions, handleAnswerSelect, handleQuizSubmit, setCurrentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0 text-white">
            {categoryTitle}: {topicTitle}
          </h1>
          <Link
            href={`/quiz/${category}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Years
          </Link>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">Loading questions...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/30 border-2 border-red-800 p-6 mb-8 rounded-lg">
            <p className="text-red-300">{error}</p>
            <Link
              href={`/quiz/${category}`}
              className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Return to year selection
            </Link>
          </div>
        )}

        {!loading && !error && questions.length > 0 && (
          <>
            {quizCompleted && (
              <div className="bg-gray-900/40 border-2 border-gray-600 p-6 mb-8 rounded-lg flex justify-between items-center shadow-md">
                <div className="flex items-baseline">
                  <span className="text-6xl font-bold text-blue-400">
                    {score}
                  </span>
                  <span className="text-2xl text-gray-500 ml-2">
                    / {questions.length}
                  </span>
                </div>
                <button
                  onClick={handleRedoQuiz}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md font-semibold"
                >
                  <RefreshCw className="mr-2" size={20} />
                  Redo Quiz
                </button>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column: Active Question */}
              <div className="flex-1">
                <div className="bg-gray-900/40 border-2 border-gray-600 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-gray-800/80 p-4 border-b-2 border-gray-600 flex justify-between items-center">
                    <h2 className="text-lg text-white font-semibold">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </h2>
                    {!quizCompleted && (
                      <span className="text-sm text-gray-400">
                        Shortcuts: 1-4, Enter
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6 border-b-2 border-gray-600">
                    <p className="text-xl text-white leading-relaxed">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: formatQuestion(currentQuestion.question),
                        }}
                      />
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-col gap-3">
                      {currentQuestion.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`w-full p-4 text-left transition-colors rounded-md text-lg flex items-center justify-between ${userAnswers[currentQuestionIndex] === option && !quizCompleted
                              ? "bg-blue-900 border-2 border-blue-500 text-white"
                              : "bg-gray-800 border-2 border-gray-600 hover:bg-gray-700 hover:border-gray-500"
                            } ${quizCompleted
                              ? option === currentQuestion.answer
                                ? "bg-green-900 border-2 border-green-500 text-white"
                                : userAnswers[currentQuestionIndex] === option
                                  ? "bg-red-900 border-2 border-red-500 text-white"
                                  : "opacity-50"
                              : ""
                            }`}
                          onClick={() =>
                            !quizCompleted && handleAnswerSelect(currentQuestionIndex, option)
                          }
                          disabled={quizCompleted}
                        >
                          <div className="flex items-center">
                            <span className="mr-4 font-bold text-gray-500 w-6">
                              {optionIndex + 1}.
                            </span>
                            <span dangerouslySetInnerHTML={{ __html: option }} />
                          </div>
                          
                          {quizCompleted &&
                            (option === currentQuestion.answer ? (
                              <Check className="text-green-400 flex-shrink-0" size={24} />
                            ) : userAnswers[currentQuestionIndex] === option ? (
                              <X className="text-red-400 flex-shrink-0" size={24} />
                            ) : null)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Prev/Next Controls */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    className={`flex items-center px-4 py-2 bg-gray-800 border-2 border-gray-600 text-white hover:bg-gray-700 rounded-md transition-colors ${currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                  >
                    <ChevronLeft className="mr-2" size={20} />
                    Previous
                  </button>
                  
                  {currentQuestionIndex < questions.length - 1 ? (
                    <button
                      className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors font-semibold shadow-sm"
                      onClick={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                    >
                      Next
                      <ChevronRight className="ml-2" size={20} />
                    </button>
                  ) : (
                    !quizCompleted && (
                      <button
                        className="flex items-center px-6 py-2 bg-emerald-600 text-white hover:bg-emerald-700 rounded-md transition-colors font-bold shadow-md"
                        onClick={handleQuizSubmit}
                      >
                        Submit Quiz
                        <Send className="ml-2" size={20} />
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Question Navigator */}
              <div className="w-full lg:w-72 mt-8 lg:mt-0">
                <div className="bg-gray-900/40 border-2 border-gray-600 rounded-lg p-4 sticky top-6 shadow-md">
                  <div className="mb-4 pb-4 border-b border-gray-700">
                    <h3 className="text-white font-bold mb-1 text-lg">Navigator</h3>
                    <p className="text-sm text-gray-400">
                      Answered: {answeredCount} / {questions.length}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2 max-h-[40vh] lg:max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {questions.map((q, i) => {
                      const isAnswered = !!userAnswers[i];
                      const isCurrent = i === currentQuestionIndex;
                      
                      let btnClass = "h-10 w-full flex items-center justify-center rounded text-sm font-medium transition-all duration-200 border border-transparent";
                      
                      if (quizCompleted) {
                         const isCorrect = userAnswers[i] === q.answer;
                         if (isAnswered) {
                            btnClass += isCorrect ? " bg-green-700 text-white border-green-500" : " bg-red-800 text-white border-red-500";
                         } else {
                            btnClass += " bg-gray-800 text-gray-500";
                         }
                      } else {
                         if (isAnswered) {
                           btnClass += " bg-blue-700 text-white border-blue-500 shadow-sm";
                         } else {
                           btnClass += " bg-gray-800 text-gray-400 hover:bg-gray-700";
                         }
                      }
                      
                      if (isCurrent) {
                        btnClass += " ring-2 ring-white ring-offset-1 ring-offset-gray-900 scale-110 z-10";
                      }
                      
                      return (
                        <button
                          key={i}
                          onClick={() => setCurrentQuestionIndex(i)}
                          className={btnClass}
                          title={`Go to question ${i + 1}`}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
