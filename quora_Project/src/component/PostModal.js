import React from 'react';
import {useState } from 'react';
import '../componentcss/PostModal.css';
import { usePostData  }   from '../CreateContext/PostContext';
// import {Userdata} from "../Data/Userdata";
 
export default  function PostModal() {
  let {postData} = usePostData()
  console.log(postData)
 let {setPostData} = usePostData();

 let [inputName , setInputName] = useState("");
 let [inputProfileImg,setInputProfileImg ] = useState("");
 let [inputHeading,setInputHeading] = useState("");
 let [inputInfo,setInputInfo] = useState("");
 let [inputPostImg,setInputPostsImg] = useState("");


 console.log(inputHeading);

 function createPost() {
if(!inputName || !inputProfileImg || !inputHeading || !inputInfo || !inputPostImg){
  alert("please fill this field")
}else{
   let newObj = {
    Id:new Date().getTime().toString(),
    name:inputName,
    logoimage:inputProfileImg,
    Question: inputHeading,
    Answer:inputInfo,
    image:inputPostImg
   }
 



let updatedObj = [ newObj ,...postData];
// console.log(updatedObj)
setPostData(updatedObj);
// setInputName
// setInputProfileImg
// setInputHeading
// setInputInfo
// setInputPostsImg("")
};
 }


  return (
    <div class="modal fade modal-dialog modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" >
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel"> Create your Posts </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" >
        <div className="modal-wrapper">
           <div className="modal-wrapper-left">
           <div className="modal-postwrap">
           <div className="modal-posts">
        
            < input value={inputName} placeholder="Enter your Name" onChange={(e) => setInputName(e.target.value)} required/>
            < input value={inputProfileImg}   placeholder="Enter your Profile image"   onChange={(e) =>  setInputProfileImg(e.target.value)} required/>
            < input value={ inputHeading}  placeholder="Enter your  Post heading"   onChange={(e) =>  setInputHeading(e.target.value)} required/>
            < input  value={ inputInfo } placeholder="Enter your Info"  onChange={(e) =>  setInputInfo(e.target.value)} required />
            < input  value={ inputPostImg } placeholder="Enter your Posts image"  onChange={(e) => setInputPostsImg(e.target.value)} required/>
            {/* <div><button className="btn btn-danger">Submit</button></div> */}
            </div>
           </div>
           </div>
           {/* <div className="modal-wrapper-right">
              <div className="modal-question">
                <h2>Add Question</h2>
            < input type="text" placeholder="Enter your Name" />
            < input type="text" placeholder="Enter your About" />
            < input type="text" placeholder="Enter your  Profile Image" />
            < input type="text" placeholder="Enter your Question?" />
            <div><button className="btn btn-danger" >Submit</button></div>
            
              </div>
           </div> */}
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger"  onClick={createPost}>Add Post</button>
        </div>
      </div>
    </div>
  </div>
  )
}


