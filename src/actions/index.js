import axios from "axios";
import { bindActionCreators } from "redux";

const URL = "http://localhost:3000/posts";

export const ON_LOAD = "ON_LOAD";
export const POST_SELECTED = "POST_SELECTED";
export const SUBMIT_NEW_POST = "SUBMIT_NEW_POST";
export const DELETE_POST ="DELETE_POST";

export function getPosts() {
  const getRequest = axios.get(URL);
  console.log("Fetching All Blog Posts:");
  console.log(getRequest);
  return {
    type: ON_LOAD,
    payload: getRequest
  };
}

export function postSelect(postId) {
  console.log("Selecting one post at: ", postId);

  var postURL = URL + "/" + postId;
  // var postURL = `{$URL}/{$postId}`;

  const postSelectRequest = axios.get(postURL);

  console.log(postSelectRequest);
  return {
    type: POST_SELECTED,
    payload: postSelectRequest
  };
}
export function submitNewPost(postId, postTitle, postBody) {
  console.log("Action: submitting new post with ", postId, postTitle, postBody);


  const submitNewPostRequest = axios.post(URL,{id:'',title:postTitle,body:postBody});

  console.log(submitNewPostRequest);
  return {
    type: SUBMIT_NEW_POST,
    payload: submitNewPostRequest
  };
}

export function deletePost(postId) {
	console.log("Action: Deleting post with ", postId);

	var deleteURL = URL+"/"+postId;
    
    
	const deletePostRequest = axios.delete(deleteURL);
    
	console.log(deletePostRequest);
	return {
	  type: DELETE_POST,
	  payload: deletePostRequest
	};
    }