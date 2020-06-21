import React from 'react';
import InstructorPage from "../../core/InstructorPage";
import {connect} from "react-redux";
import {addSession} from "../../actions/instructor";
import * as INSTRUCTOR_PATHS from "../../paths/instructor";
import getNav from "../../partials/Nav";


class AddEditSession extends InstructorPage {

    BREAD_CRUMB_LINKS = [
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: 'Dashboard'},
        {link: INSTRUCTOR_PATHS.NEW_SESSION, title: 'New Session'},
    ];

    constructor(props) {
        super(props);
         this.state = {
             title: '',
             repl_src: '',
             course: ''
        };
        this.createHeader();
        this.createBreadCrumb();
        this.createFooter();
    }

    createBreadCrumb() {
        this.BREAD_CRUMB = getNav(this.BREAD_CRUMB_LINKS, '');
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addSession(this.state);
         setTimeout(() => {
            this.setState({title: '', repl_src: ''})},
             3000);
    };

    render() {
        let {courses} = this.props.instructor;
        return (
           <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="col-md-8 mt-5 offset-md-2 pb-5">
                    <div className="card text-left mb-5">
                        <div className="card-header">
                            <div className="card-title">Add a new session</div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="">Session title</label>
                                    <input onChange={e => this.onChange(e)} name="title"
                                           value={this.state.title} type="text" className="form-control"
                                           id="title" aria-describedby="" placeholder="Enter session title" />
                                </div>
                               <div className="form-group">
                                    <label htmlFor="">Repl URL</label>
                                    <input onChange={e => this.onChange(e)} name="repl_src"
                                           value={this.state.repl_src} type="text" className="form-control"
                                           id="title" aria-describedby="" placeholder="Enter repl url" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="courses">Select the course</label>
                                    <select onChange={e => this.onChange(e)}
                                            className="form-control" id="courses" name="course">
                                            <option value="none" selected disabled hidden>
                                                  Select a course
                                              </option>
                                        {courses.map(c => <option value={c.id}>{c.title}</option>)}
                                    </select>
                                </div>
                                <button onClick={e => this.onSubmit(e)} type="submit"
                                        className="btn btn-primary">Add session</button>
                            </form>
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

export default connect(mapStateToProps, {addSession})(AddEditSession);