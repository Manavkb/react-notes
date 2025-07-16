import React from 'react';

function ChildComponent(props) {
  return (
    <button onClick={() => props.greetHandler('React Learner')}>
      Greet Parent
    </button>
  );
}

export default ChildComponent;
