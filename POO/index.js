class Question {
  constructor(question, options, correctAnswer, userAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }

  isCorrectAnswer() {
    return this.userAnswer === this.correctAnswer;
  }
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
  }

  askQuestions() {
    this.questions.forEach((question) => {
      console.log(question.question);
      const userAnswer = question.userAnswer;
      if (question.isCorrectAnswer()) {
        console.log("¡Correcto!");
      } else {
        console.log(`Incorrecto. La respuesta correcta es ${question.correctAnswer}`);
      }
    });
  }
}
  
const questions = [
    new Question("¿PREGUNTA #1?", ["OPCION 1", "OPCION 2", "OPCION 3"], "OPCION 1", "OPCION 1"),
    new Question("¿PREGUNTA #2", ["OPCION 1", "OPCION 2", "OPCION 3"], "OPCION 2", "OPCION 3"),
    new Question("¿PREGUNTA #3?", ["OPCION 1", "OPCION 2", "OPCION 3"], "OPCION 1", "OPCION 1"),
    new Question("¿PREGUNTA #4", ["OPCION 1", "OPCION 2", "OPCION 3"], "OPCION 2", "OPCION 1"),
    new Question("¿PREGUNTA #5?", ["OPCION 1", "OPCION 2", "OPCION 3"], "OPCION 2", "OPCION 2"),
    new Question("¿PREGUNTA #6?", ["OPCION 1", "OPCION 2", "OPCION 3"], "OPCION 1", "OPCION 2"),
    new Question("¿PREGUNTA #7?", ["OPCION 1", "OPCION 2", "OPCION 3"], "OPCION 2", "OPCION 2"),
    new Question("¿PREGUNTA #8?", ["OPCION 1", "OPCION 2", "OPCION 3"], "OPCION 3", "OPCION 1"),
  ];
  
  const quiz = new Quiz(questions);
  quiz.askQuestions();
  
