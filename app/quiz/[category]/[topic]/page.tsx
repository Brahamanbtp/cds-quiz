"use client";

import { ArrowLeft, Check, X, RefreshCw } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0 text-white">
            {categoryTitle}: {topicTitle}
          </h1>
          <Link
            href={`/quiz/${category}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
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
          <div className="bg-red-900/30 border-2 border-red-800 p-6 mb-8">
            <p className="text-red-300">{error}</p>
            <Link
              href={`/quiz/${category}`}
              className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Return to year selection
            </Link>
          </div>
        )}

        {!loading && !error && (
          <>
            {quizCompleted ? (
              <div className="bg-gray-900/40 border-2 border-gray-700 p-6 mb-8 flex justify-between items-center">
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
                  className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw className="mr-2" size={20} />
                  Redo Quiz
                </button>
              </div>
            ) : (
              <p className="p-5"></p>
            )}

            {questions.map((question, index) => (
              <div
                key={index}
                className="mb-10 bg-gray-900/40 border-2 border-gray-600 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-800/80 p-4 border-b-2 border-gray-600">
                  <h2 className="text-lg text-white">
                    <span className="text-xl font-bold ml-2 mr-3">
                      {index + 1}.
                    </span>
                    <span
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: formatQuestion(question.question),
                      }}
                    />
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`w-full p-3 text-left transition-colors rounded-md ${userAnswers[index] === option && !quizCompleted
                            ? "bg-blue-900 border-2 border-blue-500"
                            : "bg-gray-800 border-2 border-gray-600 hover:bg-gray-700"
                          } ${quizCompleted
                            ? option === question.answer
                              ? "bg-green-900 border-2 border-green-600"
                              : userAnswers[index] === option
                                ? "bg-red-900 border-2 border-red-600"
                                : ""
                            : ""
                          }`}
                        onClick={() =>
                          !quizCompleted && handleAnswerSelect(index, option)
                        }
                        disabled={quizCompleted}
                      >
                        <span className="flex justify-between items-center">
                          <span dangerouslySetInnerHTML={{ __html: option }} />
                          {quizCompleted &&
                            (option === question.answer ? (
                              <Check className="text-green-400" size={20} />
                            ) : userAnswers[index] === option ? (
                              <X className="text-red-400" size={20} />
                            ) : null)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {!quizCompleted && questions.length > 0 && (
              <button
                className="w-full my-6 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-semibold"
                onClick={handleQuizSubmit}
              >
                Submit Quiz
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
