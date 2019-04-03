import React from 'react';
import { Link } from 'react-router-dom';

const Nicolas = ({ addStudent, setFeaturedStudent }) => {
  return (
    <div>
      <h1>Nicolas</h1>
      <button onClick={() => addStudent('Nicolas')}>Add Nicolas</button>
      <button
        onClick={() =>
          setFeaturedStudent({
            name: 'Nicolas',
            lastName: 'Castro',
            class: 'webDev',
            hobby: 'Cycling',
            favoriteLanguage: 'CSS',
          })
        }
      >
        Featured Student
      </button>
      <Link to="/student/Nicolas">Nicolas</Link>
    </div>
  );
};

export default Nicolas;
