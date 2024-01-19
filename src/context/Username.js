import { createContext,useState, useContext } from "react";

export const FollowerContext= createContext({})

const Username = (props) => {
    const [followersList,setFollowersList]= useState([]);
   

    return(
        <>
        <FollowerContext.Provider value={{followersList, setFollowersList}}>
            {props.children}
        </FollowerContext.Provider>
        </>
    )
   
    
};

export const FollowerCtx = () => {
    const Ctx= useContext(FollowerContext);
    return Ctx;
}

export default Username;