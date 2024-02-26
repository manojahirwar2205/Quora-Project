 import React from 'react'
 import "../pagescss/Answer.css"
 const  Answer =()=> {
   return (
     <div className="Answer-wrapper">
      <div className="answerwrap">
        <div className="answerwrap1"> 
        <div className="answer-wrap1"></div>
        <div className="answer-wrap2">
          <div className="ques-wrap1">
            Questions
          </div>
          <hr/>
          <div className="ques-wrap2">Questions for you</div>
          <div className='ques-wrap3'>Answer requests</div>
          <div className='ques-wrap4'>Drafts</div>
          </div> 
        </div>
        <div className="answerwrap2">
          <div className="answerwrp1">
           <div className="answerwrp2">
          <i class="fa-brands fa-square-instagram"></i>
          <div className="answerwrp3">Questions for you</div>
            
             
          </div>
            {/* <div className="answerwrp4">
              <div className="answerwrp5">
              What is the meaning of volatility in the stock market?
              </div>
              <div className="answerwrp6">
                <div className="answerwrp7">
                No answer yet 
                </div>
                 <div className="answerwrp8">
                 Last followed 13m
                 </div>
              </div>
              <div className="answerwrp9">
                <div className="answerwrp10"></div>
                <div className="answerwrp11"></div>
                <div className="answerwrp12"></div>
              </div>
            </div> */}
          </div>
       </div>
    
      <div className="answerwrap3">
        <div className="rightanswer1">
       <div className="rightwrap1">
       Topics you know about
       </div>
       <div className="rightwrap2">
       <i class="fa-solid fa-pen"></i>
       </div>
        </div>
         
      <div className="rightanswer2">
        <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="" />
      </div>
      <div className="rightanswer3">
      No topics yet
      </div>
      <div className="rightanswer4">
      You’ll get better questions if you add more specific topics.
      </div>
      <div className="rightanswer5">
      <button className="follow-btn">Add topics</button>
      </div>
      </div>
       
     </div>
     </div>
   )
 }
 
 export default Answer
 
