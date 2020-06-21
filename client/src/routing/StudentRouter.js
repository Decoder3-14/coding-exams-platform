import React from 'react';
import {Redirect, Route} from "react-router-dom";


export default class StudentRouter extends React.Component {
    render() {
    const { component: Component, state, ...props } = this.props
    const {isAuthenticated, isInstructor} = state;
    return (
      <Route
        {...props}
        render={props => (
          isAuthenticated && !isInstructor ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )}
      />
    )
  }
}