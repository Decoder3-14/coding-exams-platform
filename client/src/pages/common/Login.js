import React from 'react';
import CommonPage from "../../core/CommonPage";
import {connect} from "react-redux";
import {login} from "../../actions/common";


class Login extends CommonPage {


    constructor(props) {
        super(props);
        this.state = {
            username: 'decoder314@gmail.com',
            password: '12345',
        }
        this.createHeader();
        this.createBreadCrumb();
        this.createFooter();
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state)
    };

    render() {
        return (
             <div>
             {this.HEADER && this.HEADER}
             {this.BREAD_CRUMB && this.BREAD_CRUMB}
             <div className="">
                <div className="col-md-6 offset-md-3">
                    <div className="card text-left mt-5">
                        <div className="card-header">
                            <div className="card-title">Login to your account</div>
                        </div>
                        <div className="card-body">
                            <form>
                               <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input value={this.state.username} onChange={e => this.onChange(e)}
                                           type="email" name="username" className="form-control" id="username"
                                           aria-describedby="username" placeholder="Enter your email" />
                                </div>
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
         </div>
        )
    }

}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {login})(Login);