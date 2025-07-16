import React from 'react';

const HobbyList = ({ name, hobbies }) => {
  return (
    <div>
      <h3>{name}'s Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
