import React from 'react';
import { Link } from 'react-router-dom';

export const Rob = ({ addStudent, setFeaturedStudent }) => {
  const student = {
    name: 'Rob',
    lastName: 'Sanchez',
    class: 'WebDev',
    hobby: 'Collecting Fountain Pens',
    favoriteLanguage: 'English with a lot of cursing',
  };

  return (
    <div>
      <h1>Robert</h1>
      <button onClick={() => addStudent('Rob')}>Add Student</button>
      <button onClick={() => setFeaturedStudent(student)}>
        Set Featured Student
      </button>
      <Link exact to={`/student/${student.name}`}>
        Yaddi Yaddi Yadda
      </Link>
    </div>
  );
};
