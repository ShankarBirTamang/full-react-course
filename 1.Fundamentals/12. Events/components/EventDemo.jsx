import React from 'react'
import { useState } from 'react'

function EventDemo() {
    const [clicked,setClicked] = useState(false);
  return (
    <>
      <button onClick={()=>setClicked(!clicked)}>Click Here!</button>
      { clicked  && <div onMouseMove={()=>console.log("mouse moved")}>
          <p>"Button Clicked"</p>
      </div>}
    </>
  )
}

export default EventDemo
