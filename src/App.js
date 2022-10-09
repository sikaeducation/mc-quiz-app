import './App.css';
import {shuffle} from 'lodash';
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

  return (
    <div className="App">
      <h1>Quiz!</h1>

      <MultipleChoiceQuestion key={1} question={{
        id: 1,
        prompt: "What is your name?",
        answer: "King Arthur",
        distractors: ["Sir Lancelot", "Sir Galahad", "Sir Robin"],
        options: ["King Arthur", "Sir Lancelot", "Sir Galahad", "Sir Robin"],
        response: "",
        isAnswered: false,
        isCorrect: false,
      }} />
    </div>
  );
}

export default App;
