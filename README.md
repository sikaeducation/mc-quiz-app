# Multiple Choice Quiz Component

Build a quiz app for multiple choice questions.

![Quiz app example](https://ik.imagekit.io/sikaeducation/mc-quiz-engine/Screenshot_2022-10-09_at_17-33-30_React_App_QdHDQadSF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665358442061&fr=w-1000)

Display whether the answer was correct when a question is answered. When all questions have been answered, hide the questions and display the score.

![Quiz app completion screen indicating score](https://ik.imagekit.io/sikaeducation/mc-quiz-engine/Screenshot_2022-10-09_173441_B8pJ3erwl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665358496751&fr=w-1000)

You can use this quiz data or come up with your own:

```js
[{
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
```
