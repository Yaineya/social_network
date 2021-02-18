const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

let initialState = {
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
};

export const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 4, message: body });
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
