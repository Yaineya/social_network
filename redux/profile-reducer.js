const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

let initialState = {
  posts: [
    { id: 1, message: " How are you?", likesCount: 2 },
    { id: 2, message: " i`m fine", likesCount: 23 },
    { id: 3, message: " привет, как дела?", likesCount: 8 }
  ],
  newPostText: "DEA Project"
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export default profileReducer;
