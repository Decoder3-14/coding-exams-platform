import { combineReducers } from 'redux';

import common from './common';
import student from './student';
import instructor from './instructor';


export default combineReducers({
    common,
    student,
    instructor
});