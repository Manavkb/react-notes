import React, { useState } from 'react';

function CounterFunctionWithHooks() {
  const [count, setCount] = useState(0); // Initial value is 0

  return (
    <div>
      <h2>FunctionCount: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterFunctionWithHooks;
