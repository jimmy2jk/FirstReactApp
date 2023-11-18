import { useState } from "react";

export default function ClickCounter () {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="click-counter">
      <p>Shadow clones counter: {counter}</p>
      <button onClick={incCounter}>Kage bunshin no jutsu!!!</button>
    </div>
  );
}