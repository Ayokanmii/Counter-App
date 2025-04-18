import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const maxLimit = 10; // Threshold for the limit message

  // Increase counter
  const handleIncrease = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  // Decrease counter, prevent going below 0
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter App</h1>
      <p>Count: {count}</p>
      {count === maxLimit && (
        <p className="limit-message">You've reached the limit!</p>
      )}
      <div className="button-group">
        <button onClick={handleIncrease} disabled={count === maxLimit}>
          Increase
        </button>
        <button onClick={handleDecrease} disabled={count === 0}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;