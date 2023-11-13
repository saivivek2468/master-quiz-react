import { data } from "../data";

const quizReducer = (state, action) => {
  switch (action.type) {
    case "HEADING":
      const { title, color, image } = action.payload;
      const questions = data.quizzes.filter((d) => d.title === title);
      console.log(questions, "questions");
      return {
        ...state,
        title,
        color,
        image,
        status: "quizscreen",
        questions: questions[0].questions,
      };

    case "activeselected":
      return {
        ...state,
        selectedAnswer: action.payload,
        answer: state.questions[state.index].answer,
        activeSelected: true,
        status:
          state.index < state.questions.length - 1
            ? "quizscreen"
            : "scorescreen",
      };

    case "nextquestion":
      return {
        ...state,
        index: state.index + 1,
        activeSelected: false,
        selectedAnswer: "",
        score:
          state.selectedAnswer === state.questions[state.index].answer
            ? ++state.score
            : state.score,
      };

    case "playagain":
      return {
        ...state,
        status: "frontscreen",
        activeSelected: false,
        selectedAnswer: "",
        score: 0,
        title: "",
        color: "",
        image: "",
        index: 0,
        questions: [],
        answer: null,
      };
    default:
      return state;
  }
};
export default quizReducer;
