import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: " My first react", likesCount: 2 },
        { id: 2, message: " second post", likesCount: 23 },
        { id: 3, message: " random name", likesCount: 8 }
      ],
      newPostText: "DEA Project"
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Daria" },
        { id: 2, name: "Mom" },
        { id: 3, name: "Dad" },
        { id: 4, name: "Bro" }
      ],
      messages: [
        { id: 1, message: "Yo" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you" }
      ],
      newMessageBody: ""
    }
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    
    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
