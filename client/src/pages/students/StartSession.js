import React from 'react';
import StudentPage from "../../core/StudentPage";
import {connect} from "react-redux";

export const startSession = (data) => dispatch => {

};


class StartSession extends StudentPage {
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
                        <div className="card">
                            <div className="card-header">
                                <h4>Question 1</h4>
                            </div>
                            <div className="card-body">
                                Submit answer
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
export default connect(mapStateToProps, {})(StartSession);