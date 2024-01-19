import { FollowerCtx } from "../context/Username";


const List = () => {
    const list= FollowerCtx()
    // console.log(list.followersList);
    return(
    <>
      <ul>
        {list.followersList.map((follower)=> {
          console.log(follower.login);
            return <li >{follower.login}</li>
        })}
      </ul>
    </>
    );
};

export default List;