
import React, { useState } from 'react';


function Sorce() {
  const [total, setTotal] = useState(0);

  const handleInitialize = () => {
    setTotal(0);
  };

  const handleAdd = () => {
    setTotal(total + 1);
  };

  const handleSubtract = () => {
    setTotal(total - 1);
  };

  const handleClear = () => {
    setTotal(0);
  };

  return (
    <div className="sorce">
      <h1>Button Counter</h1>
      <p>Total Value: {total}</p>
      <button onClick={handleInitialize}>Initialize</button>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Sorce;
