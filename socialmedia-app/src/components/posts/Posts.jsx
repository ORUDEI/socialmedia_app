import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import Post from "../post/Post";
import { useEffect } from "react";
import { getTimelinePosts } from "../../redux/actions/postAction";
import { useParams } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "no posts";
  if (params.id)
    posts = posts.filter((post) => post.userId === URLSearchParams.id);
  return (
    <div className="posts">
      {loading
        ? "Fetching posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} key={post._id} />;
          })}
    </div>
  );
};

export default Posts;
