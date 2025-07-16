import React from 'react';

const UserCard = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default UserCard;
