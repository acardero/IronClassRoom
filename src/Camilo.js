import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Camilo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'camilo',
      lastName: 'campo',
      class: 'WebDev',
      hobby: 'code',
      favoriteLanguage: 'T-SQL',
    };
  }
  render() {
    const { name } = this.state;
    const { addStudent, setFeaturedStudent } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <span>
          <button onClick={() => addStudent(name)}> Add Name String</button>
          <button onClick={() => setFeaturedStudent(this.state)}>
            Add Featured Student
          </button>
          <Link to={`/student/${name}`}>React Router Link...</Link>
        </span>
      </div>
    );
  }
}

export default Camilo;
