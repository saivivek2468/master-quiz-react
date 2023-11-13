import React from "react";
import htmlIcon from "../assets/images/icon-html.svg";
import cssIcon from "../assets/images/icon-css.svg";
import jsIcon from "../assets/images/icon-js.svg";
import accessibilityIcon from "../assets/images/icon-accessibility.svg";
import styles from "./FrontScreen.module.css";
import { useGlobalContext } from "../context/context";

const subjects = [
  {
    id: 1,
    image: htmlIcon,
    subjectName: "HTML",
    bgColor: "#fff1e9",
  },
  {
    id: 2,
    image: cssIcon,
    subjectName: "CSS",
    bgColor: "#e0fdef",
  },
  {
    id: 3,
    image: jsIcon,
    subjectName: "JavaScript",
    bgColor: "#ebf0ff",
  },
  {
    id: 4,
    image: accessibilityIcon,
    subjectName: "Accessibility",
    bgColor: "#f6e7ff",
  },
];

const SubjectsScreen = () => {
  const { dispatch } = useGlobalContext();
  return (
    <div>
      {subjects.map((subject) => (
        <div
          className={styles.subject}
          key={subject.id}
          onClick={() =>
            dispatch({
              type: "HEADING",
              payload: {
                title: subject.subjectName,
                color: subject.bgColor,
                image: subject.image,
              },
            })
          }
        >
          <div
            className={styles.subjectImg}
            style={{ background: `${subject.bgColor}` }}
          >
            <img src={subject.image} alt={subject.subjectName} />
          </div>
          <div>{subject.subjectName} </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectsScreen;
