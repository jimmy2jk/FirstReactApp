import { useState } from "react";

export default function HiddenText() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="hidden-text">
      <button onClick={toggleVisibility} className={isVisible ? "button-on" : "button-off"}>
        {isVisible ? "Сховати" : "Показати"}
      </button>
      <p>Art is an {isVisible ? "EXPLOSION!!!" : "..."}</p> 
    </div>
  );
}
