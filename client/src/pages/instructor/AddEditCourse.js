import React from 'react';
import InstructorPage from "../../core/InstructorPage";
import {connect} from "react-redux";
import {addCourse} from "../../actions/instructor";
import * as INSTRUCTOR_PATHS from "../../paths/instructor";
import getNav from "../../partials/Nav";


class AddEditCourse extends InstructorPage {

    BREAD_CRUMB_LINKS = [
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: 'Dashboard'},
        {link: INSTRUCTOR_PATHS.NEW_SESSION, title: 'New Course'},
    ];

    constructor(props) {
        super(props);
        this.state = {
            title: 'course ',
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
        this.props.addCourse(this.state);
        setTimeout(() => {this.setState({title: ''})}, 3000);
    };



    render() {
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="">
                    <div className="col-md-8 mt-5 offset-md-2">
                        <div className="card text-left">
                            <div className="card-header">
                                <div className="card-title">Add a new Question</div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="">Course title</label>
                                        <input onChange={e => this.onChange(e)}
                                            name="title" value={this.state.title} type="text" className="form-control" id="title"
                                               aria-describedby="" placeholder="Enter course title" />
                                    </div>
                                    {/*<div className="form-group">*/}
                                    {/*    <label htmlFor=""></label>*/}
                                    {/*    <TextEditor />*/}
                                    {/*</div>*/}
                                <button type="submit" onClick={e => this.onSubmit(e)} className="btn btn-info">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {this.FOOTER && this.FOOTER}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    instructor: state.instructor,
});

export default connect(mapStateToProps, {addCourse})(AddEditCourse);