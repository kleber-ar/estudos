export type QuestionType = {
  question: string,
  options: string[],
  answer: number,
}

export const questions: QuestionType[] = [
  {
    question: 'Qual ingredientes não podem faltar?',
    options: [
      'Farinha',
      'Corante',
      'Água',
      'Açúcar'
    ],
    answer: 0,
  },
  {
    question: 'Qual melhor método de cozinhar?',
    options: [
      'Microondas',
      'Fogão',
      'Fogueira',
      'Lança-chamas'
    ],
    answer: 3,
  }
];
