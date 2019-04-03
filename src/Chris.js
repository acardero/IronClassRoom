import React from 'react';
import { Link } from 'react-router-dom';

export const Chris = ({ addStudent, setFeaturedStudent }) => {
  const student = {
    name: 'Christopher',
    lastName: 'Vazquez',
    class: 'Web Dev',
    hobby: 'Gaming',
    favoriteLanguage: 'Not CSS',
  };
  return (
    <div>
      <h1>Chris</h1>
      <button onClick={() => addStudent('Chris')}>Add Chris</button>
      <button onClick={() => setFeaturedStudent(student)}>Add Student</button>
      <Link exact to={`/student/${student.name}`}>
        Details
      </Link>
    </div>
  );
};
