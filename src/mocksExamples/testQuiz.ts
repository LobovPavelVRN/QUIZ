

/** Типы вопросов */
export enum TQuestionType {
  /** Вопрос с вариантами отватов */
  Options,
  /** Вопрос с текстовым ответом */
  STRING_VALUE,
  /** Вопрос с числовым ответом */
  NUMBER_VALUE
}

export type TQuestionOption = {
  value: string;
  /** правильный ли ответ */
  right: boolean; // перенести на бек
}

/** данные, присущие всем типам вопросов (визуальное отображение, ответы и тд) */
export type TBaseQuestionData = {
  question: string; // добавим позже все типы
}

export type TExtendedQuestionData = {
  type: TQuestionType.Options,
  options: TQuestionOption[];
} | {
  type: TQuestionType.STRING_VALUE,
  answer: string;
} | {
  type: TQuestionType.NUMBER_VALUE,
  answer: number
}

export type TQuestionData = TBaseQuestionData & TExtendedQuestionData;

export type TQuizData = {
  bg: string | null;
  questions: TQuestionData[];
}

export const TestQuiz: TQuizData = {
  bg: null,
  questions: [
    {
      type: TQuestionType.Options,
      question: 'Какой-то вопрос',
      options: [
        {
          right: false,
          value: 'Какой-то ответ №1'
        },
        {
          right: true,
          value: 'Какой-то ответ №2'
        },
        {
          right: false,
          value: 'Какой-то ответ №3'
        }
      ]
    },
    {
      type: TQuestionType.NUMBER_VALUE,
      question: '1+1',
      answer: 2
    },
    {
      type: TQuestionType.STRING_VALUE,
      question: 'Самая маленькая птица в мире',
      answer: "Колибри"
    }
  ]
}
