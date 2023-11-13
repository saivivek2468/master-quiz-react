import styles from "./App.module.css";
import FrontScreen from "./components/FrontScreen";
import QuizScreen from "./components/QuizScreen";
import ScoreScreen from "./components/ScoreScreen";
import { useGlobalContext } from "./context/context";

function App() {
  const {
    quizData: { status },
  } = useGlobalContext();

  return (
    <div className={styles.backgroundContainer}>
      {status === "frontscreen" && <FrontScreen />}
      {status === "quizscreen" && <QuizScreen />}
      {status === "scorescreen" && <ScoreScreen />}
    </div>
  );
}

export default App;
