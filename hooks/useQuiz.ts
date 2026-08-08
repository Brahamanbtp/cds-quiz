import { useState, useEffect } from "react";
import type { Question } from "@/types/Question";
import { getCategoryData } from "@/utils/data-utils";

export function useQuiz(category: string, topic: string) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage first
    const savedState = localStorage.getItem(`quiz_${category}_${topic}`);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setQuestions(parsed.questions);
        setUserAnswers(parsed.userAnswers);
        setQuizCompleted(parsed.quizCompleted);
        setScore(parsed.score);
        setLoading(false);
        return;
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
    }
    
    shuffleQuestions();
  }, [category, topic]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (questions.length > 0) {
      const stateToSave = {
        questions,
        userAnswers,
        quizCompleted,
        score
      };
      localStorage.setItem(`quiz_${category}_${topic}`, JSON.stringify(stateToSave));
    }
  }, [questions, userAnswers, quizCompleted, score, category, topic]);

  const shuffleQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCategoryData(category);
      if (!data) {
        setError(`No data found for category: ${category}`);
        setLoading(false);
        return;
      }

      let allQuestions: Question[] = [];

      if (topic === "all") {
        // Combine all topics
        Object.values(data).forEach((topicQuestions) => {
          allQuestions = [...allQuestions, ...topicQuestions];
        });
      } else if (data[topic]) {
        allQuestions = data[topic];
      } else {
        setError(`No questions found for topic: ${topic}`);
        setLoading(false);
        return;
      }

      if (allQuestions.length === 0) {
        setError("No questions available for this selection");
        setLoading(false);
        return;
      }

      const shuffled = allQuestions
        .sort(() => Math.random() - 0.5)
        .map((q) => ({
          ...q,
          options: [...q.options].sort(() => Math.random() - 0.5),
        }));

      setQuestions(shuffled);
    } catch (error) {
      console.error("Failed to load questions:", error);
      setError(`Failed to load questions for ${category}/${topic}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleQuizSubmit = () => {
    const newScore = questions.reduce((acc, question, index) => {
      return acc + (userAnswers[index] === question.answer ? 1 : 0);
    }, 0);
    setScore(newScore);
    setQuizCompleted(true);
    window.scrollTo(0, 0);
  };

  const handleRedoQuiz = () => {
    setUserAnswers({});
    setQuizCompleted(false);
    setScore(0);
    localStorage.removeItem(`quiz_${category}_${topic}`);
    shuffleQuestions();
    window.scrollTo(0, 0);
  };

  return {
    questions,
    userAnswers,
    quizCompleted,
    score,
    loading,
    error,
    handleAnswerSelect,
    handleQuizSubmit,
    handleRedoQuiz,
  };
}
