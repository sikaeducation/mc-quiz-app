export default function MultipleChoiceQuestion({ respond, question }){
  const {prompt, id, isAnswered, isCorrect, options} = question
  return (
    <div className="MultipleChoice">
      <p>{prompt}</p>
      <ul>
        {options.map(option => (
          <li key={`${id}-${option}`}>
            <button
              onClick={() => isAnswered || respond(id, option)}
            >{option}</button>
          </li>
        ))}
      </ul>
      {
        isAnswered && (isCorrect
          ? <p className="correct">Correct!</p>
          : <p className="incorrect">Incorrect.</p>
        )
      }
    </div>
  )
}
