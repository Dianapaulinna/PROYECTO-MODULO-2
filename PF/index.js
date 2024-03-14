  
const questions = [
    {
      question: "¿PREGUNTA #1?",
      options: ["OPCION 1", "OPCION 2", "OPCION 3"],
      correctAnswer: "OPCION 1",
      userAnswer: "OPCION 1" // Respuesta correcta
    },
    {
      question: "PREGUNTA #2",
      options: ["OPCION 1", "OPCION 2", "OPCION 3"],
      correctAnswer: "OPCION 2",
      userAnswer: "OPCION 3" // Respuesta incorrecta
    },
    {
      question: "¿PREGUNTA #3?",
      options: ["OPCION 1", "OPCION 2", "OPCION 3"],
      correctAnswer: "OPCION 1",
      userAnswer: "OPCION 1" // Respuesta correcta
    },
    {
      question: "¿PREGUNTA #4?",
      options: ["OPCION 1", "OPCION 2", "OPCION 3"],
      correctAnswer: "OPCION 2",
      userAnswer: "OPCION 1" // Respuesta incorrecta
    },
    {
      question: "¿PREGUNTA #4?",
      options: ["OPCION 1", "OPCION 2", "OPCION 3"],
      correctAnswer: "OPCION 2",
      userAnswer: "OPCION 2" // Respuesta correcta
    },
    {
      question: "¿PREGUNTA #5?",
      options: ["OPCION 1", "OPCION 2", "OPCION 3"],
      correctAnswer: "OPCION 1",
      userAnswer: "OPCION 2" // Respuesta incorrecta
    },
    {
      question: "¿PREGUNTA #6?",
      options: ["OPCION 1", "OPCION 2", "OPCION 3"],
      correctAnswer: "OPCION 2",
      userAnswer: "OPCION 2" // Respuesta correcta
    },
    {
      question: "¿PREGUNTA #7?",
      options: ["OPCION 1", "OPCION 2", "OPCION 3"],
      correctAnswer: "OPCION 3",
      userAnswer: "OPCION 3" // Respuesta incorrecta
    }
  ];
  
  
  function isCorrectAnswer(question, answer) {
    return answer === question.correctAnswer;
  }
  
  
  function getUserAnswer(question) {
    
    return question.userAnswer;
  }
  
  function askQuestion(question) {
    console.log(question.question);
    const userAnswer = getUserAnswer(question); 
    if (isCorrectAnswer(question, userAnswer)) {
      console.log("¡Correcto!");
    } else {
      console.log("Incorrecto. La respuesta correcta es " + question.correctAnswer);
    }
  }
  
  questions.forEach((question) => {
    askQuestion(question);
  });
  
