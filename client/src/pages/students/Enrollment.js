import React from 'react';
import StudentPage from "../../core/StudentPage";
import {connect} from "react-redux";
import {setCurrentSession} from "../../actions/student";
import moment from "moment";
import * as STUDENT_PATHS from "../../paths/student";
import {Link} from "react-router-dom";


class Enrollment extends StudentPage {

    BREAD_CRUMB_LINKS = [
        {link: STUDENT_PATHS.DASHBOARD, title: 'Dashboard'},
        {link: STUDENT_PATHS.ENROLLMENT, title: this.props.student.currentEnrollment.title},
    ];

    constructor(props) {
        super(props);
        this.createHeader();
        this.createBreadCrumb();
    }

    render() {
        let currentEnrollment = this.props.student.currentEnrollment;
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="card mt-3">
                                <div className="card-header text-left">
                                    <h4>{currentEnrollment.title} Sessions</h4>
                                </div>
                                <div className="card-body">
                                    <div className="text-left">
                                        {currentEnrollment.sessions.length > 0 ? (
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Session title</th>
                                                    <th scope="col">Questions</th>
                                                    <th scope="col">Create date</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {currentEnrollment.sessions.map((session, index) => (
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            <Link onClick={() => this.props.setCurrentSession(session)}
                                                                  to={`${STUDENT_PATHS.SESSION}/${currentEnrollment.title}/${session.title}`}
                                                                  className="font-weight-bold">{session.title}</Link>
                                                        </td>
                                                        <td>{session.questions.length} Questions(s)</td>
                                                        <td>{moment(session.created_at).format('YYYY/MM/DD HH:MM')}</td>
                                                        <td><button className="btn btn-warning">Apply</button></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <div className="alert alert-warning mt-3">
                                                You Have not been enrolled to any courses.
                                            </div>
                                        )}
                                    </div>
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
    student: state.student,
});
export default connect(mapStateToProps, {setCurrentSession})(Enrollment);