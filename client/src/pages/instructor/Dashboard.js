import React from 'react';
 import * as INSTRUCTOR_PATHS from "../../paths/instructor";
import getNav from "../../partials/Nav";
import InstructorPage from "../../core/InstructorPage";
import {connect} from "react-redux";
import {fetchCourses, setCurrentCourse} from "../../actions/instructor";
import moment from "moment";
import {Link} from "react-router-dom";


class Dashboard extends InstructorPage {

    BREAD_CRUMB_LINKS = [
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: 'Dashboard'},
    ];

    constructor(props) {
        super(props);
        this.createHeader();
        this.createBreadCrumb();
        this.createFooter();
    }

    createBreadCrumb() {
        this.BREAD_CRUMB = getNav(this.BREAD_CRUMB_LINKS, '');
    }

    componentDidMount() {
        this.props.fetchCourses();
    }


    render() {
        let {courses} = this.props.instructor;
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="card mt-3 mb-5">
                                <div className="col-md-12 pt-3">
                                    <div className="text-left">
                                        {courses.length > 0 ? (
                                          <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Course name</th>
                                                <th scope="col">Students</th>
                                                <th scope="col">Sessions</th>
                                                <th scope="col">Create date</th>
                                            </tr>
                                            </thead>
                                                <tbody>
                                                {courses.map((course, index) => (
                                                   <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <Link onClick={() => this.props.setCurrentCourse(course)}
                                                              to={`${INSTRUCTOR_PATHS.COURSE}/${course.title}`}
                                                              className="font-weight-bold">{course.title}</Link>
                                                    </td>
                                                    <td>{course.members.length} students</td>
                                                    <td>{course.sessions.length} sessions</td>
                                                    <td>{moment(course.created_at).format('YYYY/MM/DD HH:MM')}</td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        ) : (
                                             <div className="alert alert-warning">
                                                <p>You have not added any courses.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    instructor: state.instructor,
});

export default connect(mapStateToProps, {fetchCourses, setCurrentCourse})(Dashboard);