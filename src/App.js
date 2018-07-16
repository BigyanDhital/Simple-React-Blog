import React, { Component } from "react";

import BlogPostsList from "./containers/blog-posts-list";
import PostDetail from "./containers/post-detail";
import CreatePost from './containers/create-post'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="heading">Hi, Please read my simple blog</h3>
        <div className="content">
       <CreatePost/>
          <BlogPostsList />
          <PostDetail />
        </div>
      </div>
    );
  }
}

export default App;
