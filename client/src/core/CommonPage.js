import React from 'react';
import PageWrapper from "./PageWrapper";
import * as COMMON_PATHS from './../paths/common';
import * as STUDENT_PATHS from './../paths/student';
import getHeader from "../partials/Header";
import getNav from "../partials/Nav";


class CommonPage extends React.Component {

    HEADER_LINKS = [
        {link: COMMON_PATHS.LOGIN, title: 'Login'},
        {link: COMMON_PATHS.REGISTER, title: 'Register'},
    ];


    constructor(props) {
        super(props);
    }

     createHeader() {
        this.HEADER = getHeader(this.HEADER_LINKS);
     }

     createBreadCrumb() {};
     createFooter() {};
}

export default CommonPage;