import React from 'react';
import StudentPage from "../../core/StudentPage";
import {connect} from "react-redux";


class Enrollment extends StudentPage {

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
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <div className="row">
                                            <div className="col-6 text-left mt-1"><span>user answer for question 1</span></div>
                                            <div className="col-6 text-right"><button data-toggle="collapse"
                                                                                      data-target="#answer-view" aria-expanded="true"
                                                                                      aria-controls="answer-view" className='btn btn-info'>View</button></div>
                                        </div>
                                    </h5>
                                </div>

                                <div className="collapse hide" aria-labelledby="answer-view"  id="answer-view"
                                     data-parent="#accordion">
                                    <div className="card-body">
                                        <small>Submitted on: <b>2323/234/23</b></small>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <div className="row">
                                            <div className="col-6 text-left mt-1"><span>user answer for question 1</span></div>
                                            <div className="col-6 text-right"><button data-toggle="collapse"
                                                                                      data-target="#answer-view" aria-expanded="true"
                                                                                      aria-controls="answer-view" className='btn btn-info'>View</button></div>
                                        </div>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse hide" aria-labelledby="answer-view"  id="answer-view"
                                     data-parent="#accordion">
                                    <div className="card-body">
                                        <small>Submitted on: <b>2323/234/23</b></small>
                                        <hr />
                                    </div>
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
export default connect(mapStateToProps, {})(Enrollment);