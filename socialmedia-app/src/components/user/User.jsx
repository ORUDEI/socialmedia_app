import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/userAction";

const User = ({ person, id }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const dispatch = useDispatch();

  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));

    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.coverPicture
              ? "http://localhost:5000/images/" + person.coverPicture
              : "http://localhost:5000/images/" + "defaultProfile.png"
          }
          alt="follower_img"
          className="followerImg"
        />
        <div className="name">
          <span>{person.firstName}</span>
          <span>{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "fc-button unfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
