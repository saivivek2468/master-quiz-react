import React from "react";
import Header from "./Header";
import Layout from "../layout/Layout";
import styles from "./ScoreScreen.module.css";
import { useGlobalContext } from "../context/context";

const ScoreScreen = () => {
  const {
    quizData: { image, color, title, score, questions },
    dispatch,
  } = useGlobalContext();

  return (
    <div>
      <Header />
      <Layout>
        <div>
          <h3 className={styles.heading1}>Quiz Completed</h3>
          <p className={styles.heading2}>You scored....</p>
        </div>
        <div className={styles.scoreCard}>
          <div className={styles.scoreCardDetails}>
            <img src={image} style={{ backgroundColor: `${color}` }} />
            <p>{title}</p>
          </div>
          <h1 className={styles.score}>{score}</h1>
          <p className={styles.length}>out of {questions.length}</p>
          <button
            className={styles.btn}
            onClick={() => dispatch({ type: "playagain" })}
          >
            Play Again
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default ScoreScreen;
