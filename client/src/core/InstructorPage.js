import React from 'react';
import PageWrapper from "./PageWrapper";
import * as COMMON_PATHS from './../paths/common';
import * as INSTRUCTOR_PATHS from './../paths/instructor';
import getHeader from "../partials/Header";
import getNav from "../partials/Nav";


class InstructorPage extends PageWrapper {

    HEADER_LINKS = [
        {link: INSTRUCTOR_PATHS.DASHBOARD, title: 'Dashboard'},
        {link: INSTRUCTOR_PATHS.PROFILE, title: 'Profile'},
        {link: INSTRUCTOR_PATHS.NEW_COURSE, title: 'New Course'},
        {link: INSTRUCTOR_PATHS.NEW_SESSION, title: 'New Session'},
        {link: COMMON_PATHS.LOGOUT, title: 'Logout'},
    ];


    constructor(props) {
        super(props);
    }

    createHeader() {
        this.HEADER = getHeader(this.HEADER_LINKS);
    }

    createBreadCrumb() {
        this.BREAD_CRUMB = getNav(this.BREAD_CRUMB_LINKS, '');
    }
}

export default InstructorPage;