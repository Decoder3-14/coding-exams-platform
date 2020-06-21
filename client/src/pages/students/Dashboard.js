import React from 'react';
import StudentPage from "../../core/StudentPage";
import { connect } from 'react-redux';

export const fetchEnrollments = (data) => dispatch => {

};


class Dashboard extends StudentPage {


    constructor(props) {
        super(props);
        this.createHeader();
        this.createBreadCrumb();
        this.createContent();
        this.createFooter();
    }


    createContent() {
        this.CONTENT = (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="card mt-3">
                            <div className="col-md-12">
                                <div className="text-left">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Course name</th>
                                            <th scope="col">Course code</th>
                                            <th scope="col">Students</th>
                                            <th scope="col">Sessions</th>
                                            <th scope="col">Create date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><a href="/" className="font-weight-bold">Course 1</a></td>
                                            <td>code_1</td>
                                            <td>123 Student</td>
                                            <td>12 Sessions</td>
                                            <td>1290/04/13 Monday 12:22</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><a href="/" className="font-weight-bold">Course 1</a></td>
                                            <td>code_1</td>
                                            <td>123 Student</td>
                                            <td>12 Sessions</td>
                                            <td>1290/04/13 Monday 12:22</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><a href="/" className="font-weight-bold">Course 1</a></td>
                                            <td>code_1</td>
                                            <td>123 Student</td>
                                            <td>12 Sessions</td>
                                            <td>1290/04/13 Monday 12:22</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><a href="/" className="font-weight-bold">Course 1</a></td>
                                            <td>code_1</td>
                                            <td>123 Student</td>
                                            <td>12 Sessions</td>
                                            <td>1290/04/13 Monday 12:22</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><a href="/" className="font-weight-bold">Course 1</a></td>
                                            <td>code_1</td>
                                            <td>123 Student</td>
                                            <td>12 Sessions</td>
                                            <td>1290/04/13 Monday 12:22</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><a href="/" className="font-weight-bold">Course 1</a></td>
                                            <td>code_1</td>
                                            <td>123 Student</td>
                                            <td>12 Sessions</td>
                                            <td>1290/04/13 Monday 12:22</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return super.render();
    }

}

const mapStateToProps = state => ({
    student: state.student,
});
export default connect(mapStateToProps, {})(Dashboard);