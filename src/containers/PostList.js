import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost } from '../actions';

export class PostList extends Component {

  // state = {
  //   posts: [],
  // };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.posts) {
  //     return {
  //       posts: nextProps.posts
  //     };
  //   }
  // }

  render() {
    return (
       <div>
      {this.props.posts.length === 0 ? <h6> No Post available </h6> : this.props.posts.map(post => {
        return (
          <Post post={ post } onDelete={ this.props.onDelete } key={ post.id } />
        );
      }
      )}
    </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    posts: state.postData.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);