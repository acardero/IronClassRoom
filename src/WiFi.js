import React from 'react';
import { Link } from 'react-router-dom';

export const WiFi = ({ addStudent, setFeaturedStudent }) => {
  const student = {
    name: 'William',
    lastName: 'Fiallos',
    class: 'Web Development',
    hobby: 'Sneakerhead',
    favoriteLanguage: 'Not sure yet',
  };

  return (
    <div>
      <h1>WiFi</h1>
      <button onClick={() => addStudent('WiFi')}>Add Student</button>
      <button onClick={() => setFeaturedStudent(student)}>
        Add Featured Student
      </button>
      <Link exact to={`/student/${student.name}`}>
        WiFi Link
      </Link>
    </div>
  );
};
