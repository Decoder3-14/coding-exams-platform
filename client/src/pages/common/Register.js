import React from 'react';
import CommonPage from "../../core/CommonPage";
import {connect} from "react-redux";
import moment from 'moment';
import {register} from "../../actions/common";


class Register extends CommonPage {


    constructor(props) {
        super(props);
        this.state = {
            role: 'student',
            username: 'username',
            fullName: 'fullname',
            email: 'decoder314@gmail.com',
            password: '12345',
            // birthdate: moment()
        }
        this.createHeader();
        this.createBreadCrumb();
        this.createFooter();
    }

    toggleAccountType = (e, role) => {
        e.preventDefault();
        this.setState({role})
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };


    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.register(this.state)
    };

    render() {
        let role = this.state.role;
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="">
                    <div className="col-md-6 offset-md-3">
                        <div className="card text-left mt-5">
                            <div className="card-header">
                                <div className="card-title">Make a new account</div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <p><b>Register As: </b></p>
                                        <div className="btn-group mb-3">
                                        <button onClick={e => this.toggleAccountType(e, 'instructor')}
                                                className={`btn btn-${role === 'instructor' ? 'primary' : 'dark'}`}>
                                                Instructor
                                        </button>
                                        <button onClick={e => this.toggleAccountType(e, 'student')}
                                                className={`btn btn-${role === 'student' ? 'primary' : 'dark'}`}>
                                                Student
                                        </button>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input value={this.state.email} onChange={e => this.onChange(e)}
                                               type="email" name="email" className="form-control" id="email"
                                               aria-describedby="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input value={this.state.username} onChange={e => this.onChange(e)}
                                               type="text" name="username" className="form-control" id="username"
                                               placeholder="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fullname">Full name</label>
                                        <input value={this.state.fullName} onChange={e => this.onChange(e)}
                                               type="text" name="fullName" className="form-control" id="fullname"
                                               placeholder="fullname" />
                                    </div>
                                    {/*<div className="form-group">*/}
                                    {/*    <label htmlFor="birthdate">Birthdate</label>*/}
                                    {/*    <input value={this.state.birthdate} onChange={e => this.onChange(e)}*/}
                                    {/*           type="date" name="birthdate" className="form-control" id="birthdate"*/}
                                    {/*           placeholder="birthdate" />*/}
                                    {/*</div>*/}
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input value={this.state.password} onChange={e => this.onChange(e)}
                                               type="password" name="password" className="form-control" id="password"
                                               placeholder="password" />
                                    </div>
                                    <button type="submit" onClick={e => this.onSubmit(e)} className="btn btn-info">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {this.FOOTER && this.FOOTER}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    student: state.student,
});

export default connect(mapStateToProps, {register})(Register);