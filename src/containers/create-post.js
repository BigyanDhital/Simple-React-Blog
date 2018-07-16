import React, { Component } from "react";
import axios from "axios";
import { submitNewPost } from "../actions";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";



class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: "",
      postBody: ""
    };
  }

  submitPost =()=>{
    this.props.submitNewPost('',this.state.postTitle,this.state.postBody);
}
  onInputChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <div className="create-post">
        Create a new post:
        <input
          className=""
          placeholder="Title"
          id="newTitle"
          value={this.state.postTitle}
          onChange={this.onInputChange.bind(this, "postTitle")}
        />
        <input
          className="body"
          placeholder="Body"
          id="newBody"
          value={this.state.postBody}
          onChange={this.onInputChange.bind(this, "postBody")}
        />
        <button type="submit" className="btn newPostButton" onClick={this.submitPost.bind(this)}>Create New Post</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
    //state.posts because we defined weather on reducers/index.js
    return {  };
  }
  function mapDispatchToProps(dispatch) {
    //when a post is selected, the result should be
    //passed to all of our reducers
  
    return bindActionCreators(
      {  submitNewPost:submitNewPost },
      dispatch
    );
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreatePost);
  