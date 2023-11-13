import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/quizReducer";

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const initialState = {
    score: 0,
    title: "",
    image: "",
    color: "",
    status: "frontscreen",
    questions: [],
    index: 0,
    selectedAnswer: "",
    activeSelected: false,
    answer: null,
  };
  const [quizData, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ quizData, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useGlobalContext = () => {
  const data = useContext(QuizContext);
  return data;
};
