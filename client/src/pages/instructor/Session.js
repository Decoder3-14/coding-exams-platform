import React from 'react';
import InstructorPage from "../../core/InstructorPage";
import * as INSTRUCTOR_PATHS from "../../paths/instructor";
import {connect} from "react-redux";
import {addQuestion} from "../../actions/instructor";
import getNav from "../../partials/Nav";
import moment from "moment";



class Session extends InstructorPage {

    BREAD_CRUMB_LINKS = [
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: 'Dashboard'},
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: this.props.instructor.currentCourse.title},
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: this.props.instructor.currentSession.title},
    ];

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            session: this.props.instructor.currentSession.id,
        };

        this.createHeader();
        this.createBreadCrumb();
        this.createFooter();
    }



    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addQuestion(this.state);
        setTimeout(() => {this.setState({title: '', description: ''})}, 3000);
    };


    render() {
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-left">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col text-left">
                                                <h4>Add a question</h4>
                                            </div>
                                            <div className="col text-right ml-auto">
                                                <button onClick={e => this.onSubmit(e)}
                                                        className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form action="">
                                            <div className="form-group">
                                                <label>Question title</label>
                                                <input onChange={e => this.onChange(e)}
                                                    name="title" value={this.state.title} type="text"
                                                    className="form-control" id="title" aria-describedby=""
                                                    placeholder="Enter question title" />
                                            </div>
                                            <div className="form-group">
                                                <label>Question body</label>
                                                <textarea onChange={e => this.onChange(e)} className="form-control"
                                                          name="description" value={this.state.description}
                                                          id="description" rows="10" placeholder="Question description" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3 mb-5">
                            <div className="text-left">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col text-left">
                                                <h4>All Questions</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {this.props.instructor.currentSession.questions.map((question, index) => (
                                            <div className="border question p-2 mb-2">
                                                <div className="row">
                                                    <div className="col text-left">
                                                        <h4>{index + 1}- {question.title}</h4>
                                                    </div>
                                                    <div className="col text-right">
                                                        {'Created at: ' + moment(question.created_at).format('YYYY/MM/DD')}
                                                    </div>
                                                </div>
                                                <hr />
                                                <p>{question.description}</p>
                                            </div>
                                        ))}
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
    instructor: state.instructor,
});

export default connect(mapStateToProps, {addQuestion})(Session);