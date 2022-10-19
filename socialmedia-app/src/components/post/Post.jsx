import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/postRequest";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <div className="post">
      <img
        src={
          data.image
            ? /* process.env.REACT_APP_PUBLIC_FOLDER */ "http://localhost:5000/images/" +
              data.image
            : ""
        }
        alt="post_img"
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt="like_img"
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="comment_img" />
        <img src={Share} alt="share_img" />
      </div>

      <span style={{ color: "var(--gray", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;