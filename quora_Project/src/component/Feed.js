import React from 'react'
import "../componentcss/Feed.css";
import PostModal from '../component/PostModal'
function Feed() {
  return (
    <div classname="Feed-main" >
         <PostModal/>
        <div className="feeds">
      <div className="feed1">
      <img
              
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  width: "40px",
                  height:"45px",
                  borderRadius: "25px",
                  padding: "0.0rem",
                }}
                src="https://i.pinimg.com/236x/0d/a3/31/0da33177d58611ef944538aa2851a619.jpg "
                alt="rocky"
              />

      </div>
      <div className="feed2">
        <input type="text" placeholder="What do you want to ask or share ?" />
      </div>
      </div>
      <div className="icons">
        <div className="icon1">
            <div>
            <i class="fa-solid fa-clipboard-question"></i>
            </div>
            <div   type="button" className="btn btn-link icon" data-bs-toggle="modal" data-bs-target="#exampleModal"> Ask </div>
           
            </div>
        <div className="icon2">
            <div>
             |<i class="fa-solid fa-user-pen"></i>
            </div>
           <div className="icon"> Answer </div>
            </div>
        <div className="icon3">
            <div>
            |<i class="fa-solid fa-pencil"></i>  
             </div>
           <div className="icon">  Post</div>
            </div>
      </div>
    </div>
  )
}

export default Feed;
