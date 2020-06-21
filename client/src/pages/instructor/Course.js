import React from 'react';
import * as INSTRUCTOR_PATHS from "../../paths/instructor";
import InstructorPage from "../../core/InstructorPage";
import {connect} from "react-redux";
import moment from "moment";
import {setCurrentSession} from "../../actions/instructor";
import {Link} from "react-router-dom";
import {FiPlusCircle, FiArrowDown} from 'react-icons/fi';


class Course extends InstructorPage {

    BREAD_CRUMB_LINKS = [
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: this.props.instructor.currentCourse.title},
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: 'Sessions'},
    ];

    constructor(props) {
        super(props);
        this.createHeader();
        this.createBreadCrumb();
        this.createFooter();
    }


    render() {
        let course = this.props.instructor.currentCourse;
        return (
             <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-left">
                                <div className="mb-2">
                                    <Link to={`${INSTRUCTOR_PATHS.COURSE}/${course.title}/enroll-students`} className="btn btn-info">
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                             <span>Import Students</span>
                                            <FiPlusCircle className="ml-2" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>All sessions</h4>
                                    </div>
                                    {this.props.instructor.currentCourse.sessions.length > 0 ? (
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Session name</th>
                                                    <th scope="col">Questions</th>
                                                    <th scope="col">Submissions</th>
                                                    <th scope="col">Create date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.instructor.currentCourse.sessions.map((session, index) => (
                                                   <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            <Link href="/" onClick={() => this.props.setCurrentSession(session)}
                                          to={`${INSTRUCTOR_PATHS.SESSION}/${session.title}`}
                                                                  className="font-weight-bold">
                                                            {session.title}</Link>
                                                        </td>
                                                        <td>{session.questions.length} questions</td>
                                                        <td>{session.applications.length} applications</td>
                                                        <td>{moment(session.created_at).format('YYYY/MM/DD HH:MM')}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="alert alert-danger">
                                            <p>You have not added any sessions to this course.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        )
    }

}

const mapStateToProps = state => ({
    instructor: state.instructor,
});

export default connect(mapStateToProps, {setCurrentSession})(Course);