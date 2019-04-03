import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Paula extends Component {
  state = {
    name: 'Paula',
    lastName: 'Sanchez',
    class: 'WebDev',
    hobby: 'Family',
    favoriteLanguage: 'js',
  };
  render() {
    return (
      <Fragment>
        <h3>Add Paula</h3>
        <button onClick={() => this.props.addStudent('Paula')}> Paula </button>
        <button onClick={() => this.props.setFeaturedStudent(this.state)}>
          Feature
        </button>
        <NavLink exact to={`/student/${this.state.name}`}>
          <h1>{this.state.name}</h1>
        </NavLink>
      </Fragment>
    );
  }
}

export default Paula;
