import React from "react";
import Header from "./Header";
import { useGlobalContext } from "../context/context";
import Layout from "../layout/Layout";
import styles from "./QuizScreen.module.css";
import correctIcon from "../assets/images/icon-correct.svg";
import wrongIcon from "../assets/images/icon-incorrect.svg";

function QuizScreen() {
  const alphabets = ["A", "B", "C", "D"];
  const { dispatch } = useGlobalContext();
  const {
    quizData: { questions, index, selectedAnswer, activeSelected, answer },
  } = useGlobalContext();

  const hasAnswer = selectedAnswer !== "";

  return (
    <div>
      <div>
        <Header />
      </div>
      <Layout>
        <div className={styles.question}>
          <h2 className={styles.questionInfo}>
            Question {index + 1} of {questions.length}
          </h2>
          <p className={styles.questionText}>{questions[index].question}</p>
          <progress
            value={index + Number(selectedAnswer !== "")}
            max={questions.length}
          ></progress>
        </div>
        <div className={styles.options}>
          {questions[index].options.map((option, idx) => (
            <button
              className={`${styles.option} ${
                activeSelected &&
                selectedAnswer === answer &&
                questions[index].options[idx] === selectedAnswer
                  ? styles.greenColor
                  : questions[index].options[idx] === selectedAnswer
                  ? styles.redColor
                  : ""
              }`}
              key={option}
              disabled={hasAnswer}
              onClick={() =>
                dispatch({
                  type: "activeselected",
                  payload: option,
                })
              }
            >
              <div>
                <p className={styles.optionAlphabets}>{alphabets[idx]}</p>
                <p className={styles.optionText}>{option} </p>
              </div>
              <p>
                {activeSelected &&
                  (answer === option ? (
                    <img src={correctIcon} />
                  ) : (
                    <img src={wrongIcon} />
                  ))}
              </p>
            </button>
          ))}

          {index < questions.length - 1 && (
            <button
              disabled={selectedAnswer === "" || selectedAnswer === null}
              onClick={() => dispatch({ type: "nextquestion" })}
              className={styles.btn}
            >
              Next Question
            </button>
          )}
        </div>
      </Layout>
    </div>
  );
}
export default QuizScreen;
