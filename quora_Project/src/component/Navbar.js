import React from "react";
import "../componentcss/Navbar.css";
 
import { NavLink } from "react-router-dom";

export default function Navbar({setTheme}) {

  return (
    <div className="main-container">
      <div className="contain">
        <div className="item1">
          <NavLink to="/">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGZVurt8r1so9YWuK5gV3pIVuhxgzg-dvUhm4bdcUAaMZPNpu9PI9KzWPGPDB7HqUHw&usqp=CAU"
              alt=""
            />
          </div>
          </NavLink>
        </div>
        <div className="item2">
          <div className="content1">
            <NavLink to="/" className={({ isActive, isPending}) =>{
              return isActive ? "red" :"blue";
            }}>
         
                <i class="fa-solid fa-house"></i>
             
            </NavLink>
            <NavLink to="/Following" className={({ isActive, isPending}) =>{
              return isActive ? "red" :"blue";
            }}>
              
                <i className="fa-solid fa-list"></i>
              
            </NavLink>
            <NavLink to="/Answer" className={({ isActive, isPending}) =>{
              return isActive ? "red" :"blue";
            }}>
            
                <i class="fa-sharp fa-regular fa-pen-to-square"></i>
            </NavLink>
            <NavLink to="/Spaces" className={({ isActive, isPending}) =>{
              return isActive ? "red" :"blue";
            }}>
               <i className="fa-solid fa-people-group"></i>
               
            </NavLink>
            <NavLink to="/Notification" className={({ isActive, isPending}) =>{
              return isActive ? "red" :"blue";
            }}>
              
                <i class="fa-regular fa-bell"></i>
               
            </NavLink>
          </div>
         
         <div className="search d-flex justify-content-start w-75">
           {/* <span> <i class="fa-solid fa-magnifying-glass"></i></span>         */}
          <input
                    type="text"
                    placeholder="Search Quora"
                   className=" col-12 rounded  h-75 border border-Secondary "
                   style={{}}
                 / >
         </div>         
          {/* <div className="content2">
            <div className="search1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="search2">
              <input type="text" placeholder="Search Quora" ></input>
            </div>

          </div> */}
        </div>
        <div className="item3">
          <div className="nav1">
            <button>Try Quora</button>
          </div>
          <div className="user-Account">
            <div className="drop-down">
              <img
                className=" dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  width: "40px",
                  height:"45px",
                  borderRadius: "25px",
                  padding: "0.0rem",
                  marginRight:"12px",
                  marginLeft:"12px"
                }}
                src="https://i.pinimg.com/236x/0d/a3/31/0da33177d58611ef944538aa2851a619.jpg "
                alt="rocky"
              />

              <ul className="dropdown-menu mt-3" style={{ width: "15rem" }}>
                <div className="one mx-2">
                  <img
                    style={{
                      width: "80px",
                      height:"120px",
                      borderRadius: "25px",
                      padding: "0.1rem",
                      
                    }}
                    src="https://i.pinimg.com/236x/0d/a3/31/0da33177d58611ef944538aa2851a619.jpg "
                    alt="Rocky"
                  />
                  <h3 className="mx-1">Rocky Balboa</h3>
                </div>

                <hr />
                <div className="two mx-2">
                  <NavLink className="Link">
                    <span className="s1">
                      <i className="fa-regular fa-comment-dots"></i>
                    </span>
                    <span className="s2">Messages</span>
                  </NavLink>

                  <NavLink className="Link">
                    <span className="s1">
                      <i className="fa-solid fa-bullhorn"></i>
                    </span>
                    <span className="s2">Create Ad</span>
                  </NavLink>

                  <NavLink className="Link">
                    <span className="s1">
                      <i className="fa-solid fa-dollar-sign"></i>
                    </span>
                    <span className="s2"> Monetization</span>
                  </NavLink>

                  <NavLink className="Link">
                    <span className="s1">
                      <i className="fa-solid fa-chart-simple"></i>
                    </span>
                    <span className="s2"> Your content & stats</span>
                  </NavLink>
                  <NavLink className="Link">
                    <span className="s1">
                      <i className="fa-regular fa-bookmark"></i>
                    </span>
                    <span className="s2"> Bookmarks </span>
                  </NavLink>

                  <NavLink className="Link">
                    <span className="s1">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </span>
                    <span className="s2">Drafts </span>
                  </NavLink>

                  <NavLink className="Link">
                    <span className="s1">
                      <i className="fa-solid fa-wand-sparkles"></i>{" "}
                    </span>
                    <span className="s2">Try Quora+</span>
                  </NavLink>
                </div>
                <hr />

                <div className="three mx-3">
                  <div onClick={() => setTheme(false)}>Dark mode</div>

                  <div>
                    <NavLink className="Link">Settings </NavLink>
                  </div>
                  <div>
                    <NavLink className="Link">Language </NavLink>
                  </div>
                  <div>
                    <NavLink className="Link">Help</NavLink>
                  </div>
                  <div>
                    <NavLink className="Link">Logout</NavLink>
                  </div>
                </div>
                <hr />

                <div className="four">
                  <NavLink className="Linkh"> •Careers</NavLink>
                  <NavLink className="Linkh"> •Terms</NavLink>
                  <NavLink className="Linkh"> •Privacy</NavLink>
                  <NavLink className="Linkh"> •Acceptable Use</NavLink>
                  <NavLink className="Linkh"> •Businesses</NavLink>
                  <NavLink className="Linkh"> •Press</NavLink>
                  <NavLink className="Linkh"> •Your Ad Choice</NavLink>
                  <NavLink className="Linkh"> •Grievance Officer</NavLink>
                </div>
              </ul>
            </div>
          </div>

          <div className="head2">
            <i class="fa-solid fa-globe"></i>
          </div>

          <div className="nav3">
            <button className="btn btn-danger"   data-toggle="modal" data-target="#myModal">Add questions</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
