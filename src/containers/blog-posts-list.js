import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, postSelect } from "../actions";
import { bindActionCreators } from "redux";

class BlogPostsList extends Component {
  showPostsList() {
    //reverse after creating a new array with new refrence using slice
    return this.props.posts.slice().reverse().map(post => {
      return (
        <li
          key={post.id}
          className={`list-group-item  ${
            /*only apply css if there's a selected post and its id matches*/
            this.props.selectedPost && post.id === this.props.selectedPost.id
              ? "selectedPost"
              : ""
          }`}
          onClick={() => this.props.postSelect(post.id)}
        >
          <div className="title">{post.id + ". " + post.title}</div>
          <div className="body">{ post.body.slice(0, 70) + "..."}</div>
        </li>
      );
    });
  }
  componentDidMount() {
    this.props.getPosts();
  }
  componentDidUpdate(prevProps) {
    //to select the first post as soon as the app load
    if (
      this.props.posts !== prevProps.posts &&
      this.props.posts.length &&
      !prevProps.posts.length
    ) {
      this.props.postSelect(this.props.posts[this.props.posts.length-1].id);
    }
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">
          <li className="topListItem">
            <div className="recentPosts">Recent Posts</div>
          </li>
          {this.showPostsList()}
        </ul>
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
    { getPosts: getPosts, postSelect: postSelect },
    dispatch
  );
}

export {BlogPostsList};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostsList);
