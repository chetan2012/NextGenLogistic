import { ADD_POST, DELETE_POST } from '../actions/types';

const initialState = {
  posts: [],
  status: {
    success: false,
    message: ''
  }
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        status: {
          success: true,
          message: 'Post Added Successfully'
        }
      };
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        status: initialState.status
      };
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id);
    default:
      return state;
  }
}