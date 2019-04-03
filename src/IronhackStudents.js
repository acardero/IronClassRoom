import React from 'react';

export const IronhackStudents = ({ students }) => {
  return (
    <ul>
      {students.map(student => (
        <li>{student}</li>
      ))}
    </ul>
  );
};

export default IronhackStudents;
