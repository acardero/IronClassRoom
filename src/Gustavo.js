import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gustavo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gustavo Galvez',
      student: {
        name: 'Gustavo',
        lastName: 'Galvez',
        class: 'WebDev',
        hobby: 'Code',
        favoriteLanguage: 'JavaScript',
      },
    };
  }
  render() {
    const { name } = this.state;
    const { addStudent, setFeaturedStudent } = this.props;
    const { student } = this.state;
    return (
      <div>
        <h3> Add Gustavo</h3>

        <button onClick={() => addStudent(name)}>Add Student</button>
        <button onClick={() => setFeaturedStudent(student)}>Add Student</button>
        <Link to="/student/Gustavo">{this.state.name}</Link>
      </div>
    );
  }
}

export default Gustavo;
