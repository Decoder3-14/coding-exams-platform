import React from 'react';
import StudentPage from "../../core/StudentPage";
import {connect} from "react-redux";


export const fetchProfile = (data) => dispatch => {

};


class StudentProfile extends StudentPage {
    constructor(props) {
        super(props);
        this.createHeader();
        this.createBreadCrumb();
        this.createContent();
        this.createFooter();
    }

    createContent() {
        this.CONTENT = (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8 offset-md-2">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="avatar">
                                    <img height={150} width={150} className='rounded-circle'
                                         src="https://i7.pngguru.com/preview/136/22/549/user-profile-computer-icons-girl-customer-avatar-thumbnail.jpg" alt=""/>                                            </div>
                                <p><b>Name:</b> name lastname</p>
                                <p><b>Email:</b> email@gmail.com</p>
                                <p><b>Username:</b> username</p>
                                <p><b>Birthdate:</b> 12/12/1212/</p>
                                <p><b>Registration date:</b> 12/12/1212/</p>
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
export default connect(mapStateToProps, {})(StudentProfile);