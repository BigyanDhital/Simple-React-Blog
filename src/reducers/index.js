import {combineReducers} from 'redux';
import BlogsPostsReducer from './reducer-blog-posts';
import BlogPostDetailReducer from'./reducer-blog-post-detail'

const rootReducer = combineReducers({
    posts : BlogsPostsReducer,
    selectedPost : BlogPostDetailReducer

})

export default rootReducer;