import React, { Component, Fragment } from 'react';
import IronhackStudents from './IronhackStudents';
import Camilo from './Camilo';
import { Chris } from './Chris';
import { WiFi } from './WiFi';
import { Bjorn } from './Bjorn';
import Paula from './Paula';
import Nicolas from './Nicolas';
import ChrisR from './ChrisR';
import { Rob } from './Rob';
import Gustavo from './Gustavo';
import Miller from './Miller';
import { Route, Switch } from 'react-router-dom';
import IronhackFeaturedStudent from './IronhackFeaturedStudent';

export class ClassRoom extends Component {
  state = {
    StudentsToday: [],
    featuredStudent: {},
  };

  addStudent = student => {
    const newStudents = [...this.state.StudentsToday, student];
    this.setState({
      StudentsToday: newStudents,
    });
  };

  setFeaturedStudent = student => {
    this.setState({ featuredStudent: student });
  };

  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/student/:student" component={IronhackFeaturedStudent} />
        </Switch>
        <Chris
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <ChrisR
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <WiFi
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <Camilo
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <Nicolas
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <Paula
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <Bjorn
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <Gustavo
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <Rob
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <Miller
          addStudent={this.addStudent}
          setFeaturedStudent={this.setFeaturedStudent}
        />
        <IronhackStudents students={this.state.StudentsToday} />
        <IronhackFeaturedStudent student={this.state.featuredStudent} />
      </Fragment>
    );
  }
}
