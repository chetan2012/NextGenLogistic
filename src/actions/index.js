import uuidv4 from 'uuid/v4';
import { ADD_POST, DELETE_POST,CLEAR_MESSAGE } from './types';

export const createPost = ({ title, body }) => ({
  type: ADD_POST,
  payload: {
    id: uuidv4(),
    title,
    body
  }
});


export const clearPostMessage = () => ({
  type: CLEAR_MESSAGE,
  payload: {
  }
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});