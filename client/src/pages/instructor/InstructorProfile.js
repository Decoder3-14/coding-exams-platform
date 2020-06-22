import React from 'react';
import InstructorPage from "../../core/InstructorPage";
import {connect} from "react-redux";
import moment from "moment";


class InstructorProfile extends InstructorPage {
    constructor(props) {
        super(props);
        this.createHeader();
        this.createFooter();
    }

    render() {
        let user = this.props.common.profile;
        return (
            <div>
                {this.HEADER && this.HEADER}
                {this.BREAD_CRUMB && this.BREAD_CRUMB}
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-8 offset-md-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <div className="avatar">
                                        <img height={150} width={150} className='rounded-circle'
                                             src="https://i7.pngguru.com/preview/136/22/549/user-profile-computer-icons-girl-customer-avatar-thumbnail.jpg" alt=""/>                                            </div>
                                    <p><b>Name:</b> {user.fullName}</p>
                                    <p><b>Email:</b> {user.email}</p>
                                    <p><b>Username:</b> {user.username}</p>
                                    {/*<p><b>Birthdate:</b> {moment(user.birthdate).format('YYYY/MM/DD')}</p>*/}
                                    <p><b>Registration date:</b> {moment(user.created_at).format('YYYY/MM/DD')}</p>
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
    common: state.common,
});

export default connect(mapStateToProps, {})(InstructorProfile);