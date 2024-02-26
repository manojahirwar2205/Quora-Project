import { createContext,useContext,useState } from "react";

import React from "react";
 import{ Userdata} from "../Data/Userdata";

let PostContext = createContext();
 function PostDataProvider ({ children}) {
    let [postData,setPostData] = useState([...Userdata]);
    console.log(postData)
    return(
        <PostContext.Provider value={{postData,setPostData}}>
            {children}
        </PostContext.Provider>
    )
 }

 let usePostData = () => useContext(PostContext);

 export { usePostData,PostDataProvider}