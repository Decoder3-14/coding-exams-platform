import React from 'react';
import StudentPage from "../../core/StudentPage";
import {connect} from "react-redux";
import * as STUDENT_PATHS from "../../paths/student";
import {submitSession} from "../../actions/student";


class Session extends StudentPage {

    BREAD_CRUMB_LINKS = [
        {link: STUDENT_PATHS.DASHBOARD, title: 'Dashboard'},
        {link: STUDENT_PATHS.ENROLLMENT, title: this.props.student.currentEnrollment.title},
        {link: STUDENT_PATHS.SESSION, title: this.props.student.currentSession.title},
    ];

    constructor(props) {
        super(props);
        this.state = {
            session: this.props.student.currentSession.id,
            pairs: []
        }
        this.createHeader();
        this.createBreadCrumb();
    }

    componentDidMount() {
        let {currentSession} = this.props.student;
        currentSession.questions.map(question => {
            this.setState({pairs: [...this.state.pairs, {'question': question.id, 'answer': ''}]})
            return question;
        });
    }

    onChange = (e, question) => {
        console.log(e.target.value)
        this.setState({pairs: this.state.pairs.map(obj => {
                if (obj.question === question) {
                    return {...obj, answer: e.target.value}
                }
            })}, () => console.log(this.state))
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.submitSession(this.state);
    };


    render() {
        let {currentEnrollment, submissions} = this.props.student;
        let {currentSession} = this.props.student;
        let currentSubmissions = submissions.map(submission => {
            if (submission.question.id === currentEnrollment.id) {
                return submission;
            }
        })
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container-fluid">
                    <div className="row mt-1">
                        <div className="col-md-12">
                            <div className="card mb-2">
                                <div className="card-header text-left">
                                    <div className="row">
                                        <div className="col text-left">
                                            <h5>Session Questions</h5>
                                        </div>
                                        {!submissions.length > 0 && <div className="col text-right">
                                            <button onClick={e => this.onSubmit(e)} className="btn btn-success">Submit your answers</button>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            {currentSession.questions.map((question, index) => (
                               <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <div className="row">
                                                    <div className="col-6 text-left mt-1">
                                                        <span><b>{index + 1}</b>- {question.title}</span>
                                                    </div>
                                                    <div className="col-6 text-right">
                                                        <button data-toggle="collapse"
                                                              data-target={`#question-view${index}`} aria-expanded="true"
                                                              aria-controls="question-view" className='btn btn-info'>
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            </h5>
                                        </div>

                                        <div className="collapse hide" aria-labelledby={`question-view${index}`}
                                             id={`question-view${index}`} data-parent="#accordion">
                                            <div className="card-body text-left">
                                                <p>
                                                    {question.description}
                                                </p>
                                                <hr />
                                                <div className="answer">
                                                    <div className="bg-light p-5">
                                                        <textarea style={{minHeight: '10em', backgroundColor: '#fefefe'}} value={this.state.pairs[question.id]} onChange={e =>
                                                            this.onChange(e, question.id)} name="answer" id="answer"
                                                            className="form-control" rows="10" />
                                                    </div>
                                                    <iframe frameBorder="0" width="100%" height="500px" src={`https://repl.it/@Decoder314/repl2?lite=true`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
export default connect(mapStateToProps, {submitSession})(Session);