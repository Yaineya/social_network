import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" />
        {props.message}
      </div>
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
