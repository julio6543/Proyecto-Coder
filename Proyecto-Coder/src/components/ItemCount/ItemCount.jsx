import { useState } from "react";
import './ItemCount.css'

function ItemCount() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>Item Count: {count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default ItemCount;
