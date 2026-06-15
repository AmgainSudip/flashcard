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
  }
];


const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleIndex = () => {
    let random = Math.floor(Math.random() * cardData.length);

    while (random === index && cardData.length > 1) {
      random = Math.floor(Math.random() * cardData.length);
    }

    setIndex(random);
    setFlipped(false)
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div>
      <h2 className="heading">The Computer Science Quiz!</h2>
      <h3 className="heading">Test your CS knowledge!</h3>
      <h4 className="heading">Number of cards: 10</h4>

      <Card 
      question={cardData[index].question}
      answer={cardData[index].answer}
      flipped={flipped}
      difficulty={cardData[index].difficulty}
      image={cardData[index].image}
      onClick={handleFlip}/>

      <button onClick={handleIndex}>⭢</button>
    </div>
  )
};

export default App;