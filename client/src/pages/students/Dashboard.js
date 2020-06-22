import React from 'react';
import StudentPage from "../../core/StudentPage";
import { connect } from 'react-redux';
import {fetchEnrollments, setCurrentEnrollment, fetchSubmissions} from "../../actions/student";
import moment from "moment";
import {Link} from "react-router-dom";
import * as STUDENT_PATHS from "../../paths/student";


class Dashboard extends StudentPage {

    constructor(props) {
        super(props);
        this.createHeader();
    }

    componentDidMount() {
        this.props.fetchEnrollments();
        this.props.fetchSubmissions();
    }


    render() {
        let {enrollments} = this.props.student;
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="card mt-3">
                                <div className="card-header text-left">
                                    <h4>My courses</h4>
                                </div>
                                <div className="card-body">
                                    <div className="col-md-12">
                                        <div className="text-left">
                                            {enrollments.length > 0 ? (
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
                                                    {enrollments.map((enrollment, index) => (
                                                       <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>
                                                                <Link onClick={() => this.props.setCurrentEnrollment(enrollment)}
                                                                    to={`${STUDENT_PATHS.ENROLLMENT}/${enrollment.title}`}
                                                                      className="font-weight-bold">Course 1</Link>
                                                            </td>
                                                            <td>{enrollment.members.length} Student(s)</td>
                                                            <td>{enrollment.sessions.length} Session(s)</td>
                                                            <td>{moment(enrollment.created_at).format('YYYY/MM/DD HH:MM')}</td>
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
            </div>
        )
    }

}

const mapStateToProps = state => ({
    student: state.student,
});
export default connect(mapStateToProps, {fetchEnrollments, setCurrentEnrollment, fetchSubmissions})(Dashboard);