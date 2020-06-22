import React from 'react';
import PageWrapper from "./PageWrapper";
import * as COMMON_PATHS from './../paths/common';
import * as STUDENT_PATHS from './../paths/student';
import getHeader from "../partials/Header";
import getNav from "../partials/Nav";


class StudentPage extends PageWrapper {

    HEADER_LINKS = [
        {link: STUDENT_PATHS.DASHBOARD, title: 'Dashboard'},
        {link: STUDENT_PATHS.PROFILE, title: 'Profile'},
        {link: COMMON_PATHS.LOGOUT, title: 'Logout'},
    ];


    constructor(props) {
        super(props);
        this.student = this.props.student;
        // alert(this.student);
    }

    createHeader() {
        this.HEADER = getHeader(this.HEADER_LINKS);
    }

    createBreadCrumb() {
        this.BREAD_CRUMB = getNav(this.BREAD_CRUMB_LINKS, '');
    }
}


export default StudentPage;