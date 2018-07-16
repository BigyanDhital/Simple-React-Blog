import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts, postSelect, deletePost } from "../actions";

class PostDetail extends Component {
  deleteSelectedPost = () => {
    this.props
      .deletePost(this.props.selectedPost.id)
      .then(() => {
        return this.props.getPosts();
      })
      .then(() => {
        if (this.props.posts.length)
          this.props.postSelect(this.props.posts[0  ].id);
    
          else {
          document.getElementById("postTitle").innerHTML = "Create a new post";
          document.getElementById("postBody").innerHTML = " ";
        }
      });
  };
  info() {
    document.getElementById("postTitle").innerHTML = "I'm Feeling Lucky";
  }

  render() {
    if (!this.props.posts.length){
      return <div>Start by creating a new post </div>;
     
    }
    if (!this.props.selectedPost) {
        return <div> Select a post from the list </div>;
      }


    return (
      <div className="selectedPostDetail">
        <p id="postTitle" className="title">
          {this.props.selectedPost.title}
        </p>
        <h6>Post {this.props.selectedPost.id}</h6>

        <p id="postBody">{this.props.selectedPost.body}</p>
        <div className="post-actions">
          <div
            className="btn btn-info btn-sm buttons"
            onClick={this.info.bind(this)}
          >
            {" "}
            info
          </div>
          <div
            className="btn btn-danger btn-sm  buttons"
            onClick={this.deleteSelectedPost.bind(this)}
          >
            delete
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //state.posts because we defined weather on reducers/index.js
  return { posts: state.posts, selectedPost: state.selectedPost };
}
function mapDispatchToProps(dispatch) {
  //when a post is selected, the result should be
  //passed to all of our reducers

  return bindActionCreators(
    { getPosts: getPosts, postSelect: postSelect, deletePost: deletePost },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
