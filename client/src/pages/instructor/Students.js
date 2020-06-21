import React from 'react';
import InstructorPage from "../../core/InstructorPage";


class Profile extends InstructorPage {

    constructor(props) {
        super(props);
        this.createHeader();
        this.createBreadCrumb();
        this.createFooter();
    }


    render() {
        return (
            <div></div>
        )
    }

}

export default Profile;