import { combineReducers } from 'redux';
import posts from './postReducer';

export default combineReducers({
    postData: posts
});