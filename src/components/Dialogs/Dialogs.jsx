import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map(m => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  // e - event - событие

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.usersDialog}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <textarea
          placeholder="Enter your message"
          value={newMessageBody}
          onChange={onNewMessageChange}
        />
      </div>
      <div>
        <button onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  );
};

export default Dialogs;
