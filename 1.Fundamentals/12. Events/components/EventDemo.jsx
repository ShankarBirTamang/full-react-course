import React from 'react'
import { useState } from 'react'

function EventDemo() {
    const [clicked,setClicked] = useState(false);
    const [buttonText,setButtonText] = useState('Click the button');
    const [mouseMoved , setMouseMoved] = useState(false);
  return (
    <>
      <button onClick={()=>setClicked(!clicked)}>First Button</button>
      { clicked  && <div 
        onMouseMove={()=>setMouseMoved(true)}
        onMouseLeave={()=>setMouseMoved(false)}>
          <p style={{
            backgroundColor : mouseMoved? 'lightyellow':'transparent',
            padding : '10px',
          }}>"First Button Clicked"</p>
      </div>}
      <br/><br/>
      <button onClick={()=>setButtonText('Second Button Clicked')}>Second button</button>
      <p >{buttonText}</p>
    </>
  )
}

export default EventDemo
