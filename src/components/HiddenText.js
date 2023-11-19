import { useState } from "react";

export default function HiddenText() {
  const [isVisible, setVisible] = useState(false);

  const changeVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="hidden-text">
      <button onClick={changeVisibility} className={isVisible ? "button-on" : "button-off"}>
        {isVisible ? "Сховати" : "Показати"}
      </button>
      <p>Art is an {isVisible ? "EXPLOSION!!!" : "..."}</p> 
    </div>
  );
}
