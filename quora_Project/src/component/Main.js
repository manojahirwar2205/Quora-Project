import React from 'react'
import "../componentcss/Main.css";
import   Feed from './Feed';
import Details from './Main-content';

function main() {
  return (
    <div className='main'>
      <div className="main1">
      <Feed/>
      </div>
      <div className="main2">
      <Details/>

      </div>
    </div>
  )
}

export default main
