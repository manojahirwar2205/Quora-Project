import React from 'react'
import SidebarOption from '../component/SidebarOption';
import Main from '../component/Main';
 
import "../pagescss/Home.css";
import Rightbar from '../component/Rightbar';
function Home() {
  return (
    <div>
   <div className="quora">
      <SidebarOption />
      <Main/>
      <Rightbar/>
      </div>
    </div>
  )
}

export default Home
