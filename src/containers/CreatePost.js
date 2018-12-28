import { connect } from 'react-redux';
import { createPost, clearPostMessage} from '../actions';
import NewPost from '../components/NewPost';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    },
    clearMessage:() =>{
      dispatch(clearPostMessage());
    }
  };
};

export default connect(
  function(state) {
    return {
      post: state.postData.posts,
      status: state.postData.status
    }
  }, 
  mapDispatchToProps
)(NewPost);