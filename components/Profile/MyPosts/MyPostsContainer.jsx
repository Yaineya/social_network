import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts.jsx";

const MyPostsContainer = props => {
  debugger;
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = text => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={() => console.log(4)}
      addPost={addPost}
      posts={state.profilePage.posts || []}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
