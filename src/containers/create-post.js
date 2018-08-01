import React, { Component } from "react";
import axios from "axios";
import { submitNewPost } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: "",
      postBody: ""
    };
  }

  submitPost = () => {
    //Check if any of the field is empty, and color red if it is
    if (!this.state.postTitle)
      document.getElementById("newTitle").style = "border:1px solid red;";
    else if (!this.state.postBody)
      document.getElementById("newBody").style = "border:1px solid red;";
    else if (this.state.postTitle && this.state.postBody)
      this.props.submitNewPost("", this.state.postTitle, this.state.postBody);
  };
  onInputChange(key, event) {
    this.setState({ [key]: event.target.value });
   //Change the border color of input back to normal after the input is corrected   
    switch (key) {
      case "postTitle":
        document.getElementById("newTitle").style =
          "border:1px solid rgb(169, 168, 168);";
        break;
      case "postBody":
        document.getElementById("newBody").style =
          "border:1px solid rgb(169, 168, 168);";
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="create-post ">
        Create a new post:
        <input
          className="create-post-input input"
          placeholder="Title"
          id="newTitle"
          value={this.state.postTitle}
          onChange={this.onInputChange.bind(this, "postTitle")}
        />
        <input
          className="body input"
          placeholder="Body"
          id="newBody"
          value={this.state.postBody}
          onChange={this.onInputChange.bind(this, "postBody")}
        />
        <button
          type="submit"
          className="btn newPostButton"
          id="createPostButton"
          onClick={this.submitPost.bind(this)}
        >
          Create New Post
        </button>
      </div>
    );
  }
}

CreatePost.propTypes = {
  submitPost: PropTypes.func.isRequired,
  submitNewPost: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  //state.posts because we defined weather on reducers/index.js
  return {};
}
function mapDispatchToProps(dispatch) {
  //when a post is selected, the result should be
  //passed to all of our reducers

  return bindActionCreators({ submitNewPost: submitNewPost }, dispatch);
}

export { CreatePost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
