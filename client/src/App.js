import React from 'react';
import './App.css';

// react router
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import StudentRouter from "./routing/StudentRouter";
import InstructorRouter from "./routing/InstructorRouter";
import VisitorRouter from "./routing/VisitorRouter";
import { createBrowserHistory } from 'history';

import * as COMMON_PATHS from './paths/common';
import * as STUDENT_PATHS from './paths/student';
import * as INSTRUCTOR_PATHS from './paths/instructor';

// pages
import Index from './pages/common/Index';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import InstructorProfile from "./pages/instructor/InstructorProfile";
import AddEditCourse from "./pages/instructor/AddEditCourse";
import AddEditSession from "./pages/instructor/AddEditSession";
import EnrollStudentsFromList from "./pages/instructor/EnrollStudentsFromList";
import InstructorDashboard from "./pages/instructor/Dashboard";
import Course from "./pages/instructor/Course";
import Session from "./pages/instructor/Session";
import Enrollment from "./pages/students/Enrollment";
import StudentDashboard from "./pages/students/Dashboard";
import StudentSession from "./pages/students/Session";
import StudentProfile from "./pages/students/StudentProfile";
import Logout from "./pages/common/Logout";


function App(props) {
    const customHistory = createBrowserHistory();
    let {isAuthenticated, isInstructor} = props;
    let state = {isAuthenticated, isInstructor};
    return (
        <div className="App">
            <Router history={customHistory}>
                <Switch>
                    <VisitorRouter path={COMMON_PATHS.ABS} state={state} component={Index} exact/>
                    <VisitorRouter path={COMMON_PATHS.LOGIN} state={state} component={Login} exact/>
                    <VisitorRouter path={COMMON_PATHS.REGISTER} state={state} component={Register} exact/>

                    <Route path={COMMON_PATHS.LOGOUT} component={Logout} exact />

                    <InstructorRouter path={INSTRUCTOR_PATHS.PROFILE} state={state} component={InstructorProfile} exact/>
                    <InstructorRouter path={INSTRUCTOR_PATHS.NEW_COURSE} state={state} component={AddEditCourse} exact/>
                    <InstructorRouter path={INSTRUCTOR_PATHS.NEW_SESSION} state={state} component={AddEditSession} exact/>
                    <InstructorRouter path={INSTRUCTOR_PATHS.ENROLL_STUDENTS} state={state} component={EnrollStudentsFromList} exact/>
                    <InstructorRouter path={INSTRUCTOR_PATHS.DASHBOARD} state={state} component={InstructorDashboard} exact/>
                    <InstructorRouter path={`${INSTRUCTOR_PATHS.COURSE}/:course`} state={state} component={Course} exact/>
                    <InstructorRouter path={`${INSTRUCTOR_PATHS.COURSE}/:course/enroll-students`} state={state} component={EnrollStudentsFromList} exact/>
                    <InstructorRouter path={`${INSTRUCTOR_PATHS.SESSION}/:session`} state={state} component={Session} exact/>

                    <StudentRouter path={STUDENT_PATHS.DASHBOARD} state={state} component={StudentDashboard} exact/>
                    <StudentRouter path={`${STUDENT_PATHS.ENROLLMENT}/:enrollment`} state={state} component={Enrollment} exact/>
                    <StudentRouter path={`${STUDENT_PATHS.SESSION}/:enrollment/:session`} state={state} component={StudentSession} exact/>
                    <StudentRouter path={STUDENT_PATHS.PROFILE} state={state} component={StudentProfile} exact/>
                    <Route path="*" component={() => <div style={{minHeight: '100vh'}} className="font-weight-bold text-white d-flex flex-row
                     justify-content-center align-items-center">Not found 404.</div>} />
                </Switch>
            </Router>
        </div>
    );
}


const mapStateToProps = state => ({
    isAuthenticated: state.common.isAuthenticated,
    isInstructor: state.common.isInstructor
});


export default connect(mapStateToProps)(App);
