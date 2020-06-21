import React from 'react';
import * as COMMON_PATHS from './../../paths/common';
import {Link} from "react-router-dom";
import CommonPage from "../../core/CommonPage";


class Index extends CommonPage {

    constructor(props) {
        super(props);
        this.createHeader();
        this.createBreadCrumb();
         this.createFooter();
    }


    render() {
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="jumbotron">
                                <h1 className="display-4">Hello, world!</h1>
                                <p className="lead">Welcome to this simple web-based tool to create coding sessions.</p>
                                <hr className="my-4" />
                                <p>Start by making an account</p>
                                <p className="lead">
                                    <Link className="btn btn-warning mx-2" to={COMMON_PATHS.REGISTER} role="button">Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Index;