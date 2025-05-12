import { QuestionType } from "@/data/questions";

type Props = {
  questions: QuestionType[];
  answers: number[];
}

function Result({ questions, answers }: Props) {
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="border-b border-gray-300">
          <div className="font-bold m-2">{index + 1}. {question.question}</div>
          <div className="m-2">
            <span>{question.answer === answers[index] ? 'acertô' : 'deu mole'}</span> - ({question.options[question.answer]})
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default Result;
