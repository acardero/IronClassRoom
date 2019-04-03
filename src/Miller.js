import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Miller extends Component {
  state = {
    name: 'Miller',
    lastName: 'Rosas',
    class: 'WebDev',
    hobby: 'Soccer',
    favoriteLanguage: 'JS',
  };
  render() {
    const { addStudent, setFeaturedStudent } = this.props;
    return (
      <div>
        <h1>Miller</h1>
        <button onClick={() => addStudent('Miller')}>Add</button>
        <button onClick={() => setFeaturedStudent(this.state)}>Add</button>
        <Link to="/student/Miller">{this.state.name}</Link>
      </div>
    );
  }
}

export default Miller;
