import React from 'react';
import { Link } from 'react-router-dom';

export const Bjorn = ({ addStudent, setFeaturedStudent }) => {
  const BjornR = {
    name: 'Dr',
    lastName: 'Roland',
    class: 'Web Dev',
    hobby: 'long walks to my fridge',
    favoriteLanguage: 'JS',
  };

  return (
    <div>
      <h1>Bjorn</h1>
      <button onClick={() => addStudent('King Sir Björn IV')}>Add</button>
      <button onClick={() => setFeaturedStudent(BjornR)}>Features</button>
      <Link exact to={`/student/${BjornR.name}`}>
        Click Me
      </Link>
    </div>
  );
};
