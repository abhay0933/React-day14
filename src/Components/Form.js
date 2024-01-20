import { useState } from "react";
import axios from "axios";
import { FollowerCtx } from "../context/Username";

const Form = () => {
  const [username, setUsername] = useState("");
  const findUsername = e => {
    setUsername(e.target.value);
    // console.log(username);
  };

  const follow = FollowerCtx();
  // console.log(follow);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const followersList= await axios.get(`https://api.github.com/users/${username}/followers?page=1`);
    // console.log(followersList.data);
    follow.setFollowersList(followersList.data);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type='text'
          placeholder='Enter Username'
          onChange={findUsername}
          className="inputbox"
        />
        <input type='submit' value='Get Followers'className="inputbtn" />
      </form>
    </>
  );
};

export default Form;
