import React from 'react';
import {Redirect, Route} from "react-router-dom";


export default class VisitorRouter extends React.Component {
    render() {
    const { component: Component, state, ...props } = this.props
    const {isAuthenticated, isInstructor} = state;
    return (
      <Route
        {...props}
        render={props => (
          !isAuthenticated ?
            <Component {...props} /> :
            isInstructor ? <Redirect to='/instructor/dashboard' /> :
                <Redirect to='/student/dashboard' />
        )}
      />
    )
  }
}