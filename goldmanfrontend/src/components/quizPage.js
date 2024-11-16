import React, { useState } from "react";

const Quizpage = () => {
  const [language, setLanguage] = useState(null); // null, "english", or "spanish"
  const [a1, setA1] = useState(null);
  const [a2, setA2] = useState(null);
  const [a3, setA3] = useState(null);
  const [a4, setA4] = useState(null);
  const [a5, setA5] = useState(null);
  const [answers, setAnswers] = useState([]);


  const handleLanguageSelection = (lang) => {
    setLanguage(lang);
  };

  const handleSubmit = () => {
    if (a1 && a2 && a3 && a4 && a5) {
      const newAnswers = {
        a1,
        a2,
        a3,
        a4,
        a5,
      };
      setAnswers([...answers, newAnswers]);
      alert(language === "english" ? "Your answers have been submitted!" : "¡Tus respuestas han sido enviadas!");
    } else {
      alert(language === "english" ? "Please answer all questions" : "Por favor responde todas las preguntas");
    }
  };


  return (
    <div>
      {!language ? (
        <>
          <h1>Select Your Language / Seleccione su idioma</h1>
          <button onClick={() => handleLanguageSelection("english")}>
            English
          </button>
          <button onClick={() => handleLanguageSelection("spanish")}>
            Español
          </button>
        </>
      ) : (
        <>
            <h1>
                {language === "english" ? "Please answer these questions for your account": 
                "Por favor responda estas preguntas para su cuenta"}
            </h1>
            <h2>
                {language === "english" ? "Question 1" : "Pregunta 1"}
            </h2>
            <h3>
                {language === "english" ? "Do you have an account?" : "¿Quieres manzanas o plátanos?"}
            </h3>
            <button onClick={() => setA1("Yes")}>
                {language === "english" ? "Yes" : "Si"}
            </button>
            <button onClick={() => setA1("No")}>
                {language === "english" ? "No" : "No"}
            </button>

            <h2>
                {language === "english" ? "Question 2" : "Pregunta 2"}
            </h2>
            <h3>
                {language === "english" ? "Do you have an account?" : "¿Quieres manzanas o plátanos?"}
            </h3>
            <button onClick={() => setA2("Yes")}>
                {language === "english" ? "Yes" : "Si"}
            </button>
            <button onClick={() => setA2("No")}>
                {language === "english" ? "No" : "No"}
            </button>

            <h2>
                {language === "english" ? "Question 1" : "Pregunta 1"}
            </h2>
            <h3>
                {language === "english" ? "Do you have an account?" : "¿Quieres manzanas o plátanos?"}
            </h3>
            <button onClick={() => setA3("Yes")}>
                {language === "english" ? "Yes" : "Si"}
            </button>
            <button onClick={() => setA3("No")}>
                {language === "english" ? "No" : "No"}
            </button>

            <h2>
                {language === "english" ? "Question 1" : "Pregunta 1"}
            </h2>
            <h3>
                {language === "english" ? "Do you have an account?" : "¿Quieres manzanas o plátanos?"}
            </h3>
            <button onClick={() => setA4("Yes")}>
                {language === "english" ? "Yes" : "Si"}
            </button>
            <button onClick={() => setA4("No")}>
                {language === "english" ? "No" : "No"}
            </button>

            <h2>
                {language === "english" ? "Question 1" : "Pregunta 1"}
            </h2>
            <h3>
                {language === "english" ? "Do you have an account?" : "¿Quieres manzanas o plátanos?"}
            </h3>
            <button onClick={() => setA5("Yes")}>
                {language === "english" ? "Yes" : "Si"}
            </button>
            <button onClick={() => setA5("No")}>
                {language === "english" ? "No" : "No"}
            </button>

            <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Quizpage;