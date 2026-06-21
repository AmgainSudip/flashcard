import './App.css'
import Card from './components/cards'
import { useState } from 'react'

const cardData = [
  {
    question: "Which data structure follows LIFO?",
    answer: "Stack",
    difficulty: "easy",
    image: null
  },
  {
    question: "Which data structure follows FIFO?",
    answer: "Queue",
    difficulty: "easy",
    image: null
  },
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
    difficulty: "easy",
    image: null
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    difficulty: "easy",
    image: null
  },
  {
    question: "What does API stand for?",
    answer: "Application Programming Interface",
    difficulty: "medium",
    image: "API.png"
  },
  {
    question: "Which search algorithm works on a sorted array?",
    answer: "Binary Search",
    difficulty: "medium",
    image: null
  },
  {
    question: "What keyword is used to define a function in Python?",
    answer: "def",
    difficulty: "easy",
    image: null
  },
  {
    question: "Which database language is used to query data?",
    answer: "SQL",
    difficulty: "easy",
    image: null
  },
  {
    question: "What does CPU stand for?",
    answer: "Central Processing Unit",
    difficulty: "medium",
    image: null
  },
  {
    question: "Which company created the Java programming language?",
    answer: "Sun Microsystems",
    difficulty: "hard",
    image: null
  }
];


const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleNext = () => {
    if (index < cardData.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
      setGuess("");
      setResult("");
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFlipped(false);
      setGuess("");
      setResult("");
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleSubmit = () => {
    if (guess.toLowerCase() === cardData[index].answer.toLowerCase()) {
      setResult("correct");

      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    }
    else {
      setResult("wrong");
      setCurrentStreak(0);
    }
  };

  return (
    <div>
      <h2 className="heading">The Computer Science Quiz!</h2>
      <h3 className="heading">Test your CS knowledge!</h3>
      <h4 className="heading">Number of cards: 10</h4>
      <p>Current Streak: {currentStreak}</p>
      <p>Longest Streak: {longestStreak}</p>
      <Card 
      question={cardData[index].question}
      answer={cardData[index].answer}
      flipped={flipped}
      difficulty={cardData[index].difficulty}
      image={cardData[index].image}
      onClick={handleFlip}/>
      
      <div className="answer-section">
        <p>Enter your answer here:</p>
        <input type="text" value={guess} onChange = {(e) => setGuess(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        {result === "correct" && <p>Correct!</p>}
        {result === "wrong" && <p>Wrong</p>}
      </div>
      
      <div className="navigation">
        <button onClick={handlePrev} disabled={index === 0}> ← </button>
        <button onClick={handleNext} disabled={index === cardData.length-1}>→</button>
      </div>
    </div>
  )
};

export default App;