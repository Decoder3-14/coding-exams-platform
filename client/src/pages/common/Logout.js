import React from 'react';
import CommonPage from "../../core/CommonPage";
import {connect} from "react-redux";
import {logout} from "../../actions/common";
import {Redirect} from "react-router-dom";
import * as COMMON_PATHS from "../../paths/common";


class Logout extends CommonPage {


    constructor(props) {
        super(props);
        this.state = {
            timer: 3
        };
    }

    componentDidMount() {
        this.props.logout();
    }


    render() {
        setTimeout(() => this.setState({timer: this.state.timer - 1}), 1000)
        return (
            this.state.timer > 0 ? (
                <div className="text-center">
                     <div className="alert alert-danger">
                         <h5>Logging out ..</h5>
                     </div>
                </div>
            ): <Redirect to={COMMON_PATHS.LOGIN} />
        )
    }

}

const mapStateToProps = state => ({
    common: state.common,
});

export default connect(mapStateToProps, {logout})(Logout);