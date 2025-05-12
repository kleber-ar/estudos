import { QuestionType } from "@/data/questions";
import { useState } from "react";

type Props = {
  question: QuestionType;
  count: number;
  onAnswer: (answer: number) => void;
}


function Question({ question, count, onAnswer }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  function checkQuestion(index: number) {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);

      setTimeout(() => {
        onAnswer(index);
        setSelectedAnswer(null)
      }, 1000);
    }
  }

  return (
    <div>
      <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
      <div>
        {question.options.map((option, index) => (
          <div key={index}
            onClick={() => checkQuestion(index)}
            className={`text-lg border rounded-md my-5 p-3 bg-blue-100 border-blue-300

            ${selectedAnswer !== null ? 'cursor-auto' : "cursor-pointer hover:opacity-60"}
            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === index && 'bg-green-400'}
            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === index && 'bg-red-400'}
          `}>
            {option}
          </div>
        ))}
      </div>
    </div >
  );
}

export default Question;
