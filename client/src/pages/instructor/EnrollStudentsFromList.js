import React from 'react';
import * as INSTRUCTOR_PATHS from "../../paths/instructor";
import getNav from "../../partials/Nav";
import InstructorPage from "../../core/InstructorPage";
import {connect} from "react-redux";
import {setCurrentSession, enrollStudents} from "../../actions/instructor";


class EnrollStudentsFromList extends InstructorPage {

    fileReader;
    BREAD_CRUMB_LINKS = [
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: 'Dashboard'},
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: this.props.instructor.currentCourse.title},
        {link: INSTRUCTOR_PATHS.COURSE, title: 'Enrolling Students'},
    ];

    constructor(props) {
        super(props);
        this.state = {
            students: [],
            loading: false,
            incorrectSignature: false
        };
        this.createHeader();
        this.createBreadCrumb();
        this.createFooter();
    }





    csvFileReader = e => {
        let content = this.fileReader.result;
        let rows = content.split('\n');

        const header = rows[0].split(',');
        rows.splice(0, 1); // removing the header
        if (header.includes('email') || header.includes('Email')) {
            this.setState({loading: false, incorrectSignature: false, students: rows.map(row =>
                    row.split(',')[header.indexOf('email')])}, () => {
                this.props.enrollStudents({students: this.state.students,
                    course: this.props.instructor.currentCourse.id});
            })
        } else {
            const header = rows[0].split(',');
            console.log(header);
            console.log(rows);
            this.setState({loading: false, incorrectSignature: true})
        }
    };

    csvFileHandler = file => {
        this.setState({loading: true}, () => {
            this.fileReader = new FileReader();
            this.fileReader.onloadend = this.csvFileReader;
            this.fileReader.readAsText(file);
        })
    };

    render() {
        let course = this.props.instructor.currentCourse;
        return (
             <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            {this.state.loading && <div className="alert alert-warning">Loading</div>}
                            <div className="jumbotron jumbotron-fluid rounded">
                                <div className="container">
                                    <h1 className="display-4">Enroll students</h1>
                                    <p className="lead">Upload the file that contains a list of students <b>
                                        [email, first & last name]</b>
                                    </p>
                                    {this.state.incorrectSignature && <div className="alert alert-danger">
                                            Incorrect list file signature/content. Please ensure std email column exists.
                                        </div>}
                                    <div className="custom-file">
                                        <input
                                            onChange={e => this.csvFileHandler(e.target.files[0])} name="csv"
                                            accept=".csv" type="file" className="custom-file-input" id="csv" />
                                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 offset-md-2">
                            <div className="card mb-5">
                                <div className="card-header text-left">
                                    <h5>Enrolled students</h5>
                                </div>
                                <div className="card-body">
                                    {course.members.length > 0 ? (
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Full Name</th>
                                                    <th scope="col">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {course.members.map((member, index) => (
                                                   <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{member.username}</td>
                                                        <td>{member.fullName}</td>
                                                        <td>{member.email}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="alert alert-warning">
                                            <p>You have not enrolled any students.</p>
                                        </div>
                                    ) }
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

export default  connect(mapStateToProps, {setCurrentSession, enrollStudents})(EnrollStudentsFromList);