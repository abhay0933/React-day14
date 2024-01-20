import { FollowerCtx } from "../context/Username";


const List = () => {
    const list= FollowerCtx()
    console.log(list);
    return(
    <>
      <ul>
        {list.followersList.map((follower)=> {
          console.log(follower.login);
            return <li >
              <img className="img" src={follower.avatar_url} />
              <p className="followername">{follower.login}</p> </li>
        })}
      </ul>
    </>
    );
};

export default List;