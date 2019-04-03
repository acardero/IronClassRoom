import React from 'react';

const IronhackFeaturedStudent = ({ student, match }) => {
  let studentLink = '';
  if (match) {
    studentLink = match.params.student;
  }
  const studentCopy = student || {};
  return studentCopy.name ? (
    <div>
      <hr />
      <p>FEATURED STUDENT SECTION!!! YEAH!!!</p>
      <hr />
      <h1>{studentCopy.name || ''}</h1>
      <h2>{studentCopy.lastName || ''}</h2>
      <h3>{studentCopy.class || ''}</h3>
      <h2>{studentCopy.hobby || ''}</h2>
      <h1>{studentCopy.favoriteLanguage || ''}</h1>
    </div>
  ) : (
    <div> This was rendered by a Link to {studentLink}</div>
  );
};
export default IronhackFeaturedStudent;
