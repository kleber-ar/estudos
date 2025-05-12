'use client'

import Question from '@/components/Question';
import Result from '@/components/Result';
import { questions } from '@/data/questions';
import { useState } from 'react';

export default function Home() {
  const title = 'Quiz de Culinária';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  function loadNextQuestion() {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleAnswer(answer: number) {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  function reset() {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false);
  }

  return (
    <div className="w-full h-screen bg-blue-600 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white text-black rounded-lg">
        <div className="text-2xl font-bold p-5 text-center border-b border-gray-300">{title}</div>
        <div className='p-5'>
          {!showResult &&
            <Question
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          }
          {showResult &&
            <Result
              questions={questions}
              answers={answers}
            />
          }
        </div>
        <div className='text-center mb-5'>
          {!showResult &&
            <div className="">{currentQuestion + 1} de {questions.length} respostas </div>
          }
          {showResult &&
            <button className="p-3 cursor-pointer rounded-md bg-blue-600 text-white" onClick={reset}> Reset </button>
          }
        </div>
      </div>
    </div >
  );
}
