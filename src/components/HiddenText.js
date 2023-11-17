import { useState } from "react";

export default function HiddenText() {
  const [isVisible, setVisible] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  const incrementCounter = () => {
    setClickCounter(clickCounter + 1); 
  }

  const handleClick = () => {
    toggleVisibility();
    incrementCounter();
  }
  return (
    <div className="hidden-text">
      <button onClick={handleClick}>
        {isVisible ? "Сховати" : "Показати"}
      </button>
      {isVisible && <p>Visible</p>}
      <div className="counter" >
        Кількість натискань: {clickCounter}
      </div>
    </div>
  )
}