import React from 'react';
import { Link } from 'react-router-dom';

const ChrisR = ({ addStudent, setFeaturedStudent }) => {
  const studentInfo = {
    name: 'Chris',
    lastName: 'Rodriguez',
    class: 'Web Dev',
    hobby: 'Sleeping',
    favoriteLanguage: 'Javascript',
  };

  return (
    <div>
      <h1>{studentInfo.name}</h1>
      <button onClick={() => addStudent(studentInfo.name)}>
        Add Chris R to class
      </button>
      <br />
      <br />
      <button onClick={() => setFeaturedStudent(studentInfo)}>
        Set to Featured
      </button>
      <br />
      <br />
      <Link exact to={`/student/${studentInfo.name}`}>
        Profile
      </Link>
    </div>
  );
};

export default ChrisR;
