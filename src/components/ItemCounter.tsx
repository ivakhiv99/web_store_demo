import React, { useState } from 'react';

const ItemCounter: React.FC = () => {
  const [itemsCount, setCount] = useState<number>(1);

  const increment = () => {
    setCount(itemsCount + 1);
  };

  const decrement = () => {
    if(itemsCount > 1) {
        setCount(itemsCount - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}>+1</button>
      <h2>{itemsCount}</h2>
      <button onClick={decrement} disabled={itemsCount === 1}>-1</button>
    </div>
  );
};

export default ItemCounter;
