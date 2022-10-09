import './App.css';
import {shuffle, cloneDeep} from 'lodash';
import {useState} from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

const quizQuestions = [{
  id: 1,
  prompt: "What is your name?",
  answer: "King Arthur",
  distractors: ["Sir Lancelot", "Sir Galahad", "Sir Robin"]
}, {
  id: 2,
  prompt: "What is your quest?",
  answer: "To seek the Holy Grail",
  distractors: ["Fame", "Fortune", "Love"]
}, {
  id: 3,
  prompt: "What is the air-speed velocity of an unladen swallow?",
  answer: "What do you mean? An African or European swallow?",
  distractors: ["24mph", "12mph", "18mph"]
}]

function App() {
  const quizTemplate = quizQuestions.map(question => {
    return {
      ...question,
      options: shuffle([...question.distractors, question.answer]),
      response: "",
      isAnswered: false,
      isCorrect: false,
    }
  })
  const [quiz, setQuiz] = useState(quizTemplate)

  const respond = (id, response) => {
    const updatedQuestion = cloneDeep(quiz.find(question => question.id === id))
    updatedQuestion.isAnswered = true
    updatedQuestion.isCorrect = updatedQuestion.answer === response
    updatedQuestion.response = response
    const updatedQuiz = quiz.map(question => {
      return question.id === id
        ? updatedQuestion
        : question
    })
    
    setQuiz(updatedQuiz)
  }

  const isFinished = quiz.reduce((answered, question) => question.isAnswered ? answered + 1 : answered, 0) === quiz.length
  const score = quiz.reduce((score, question) => question.isCorrect ? score + 1 : score, 0)

  return (
    <div className="App">
      <h1>Quiz!</h1>

      {!isFinished
        ? quiz.map(question => (
          <MultipleChoiceQuestion key={question.id} respond={respond} question={question} />
        ))
        : <p>All done! You got {score} right out of {quiz.length}.</p>
      }
    </div>
  );
}

export default App;
