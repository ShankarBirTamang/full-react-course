import React from 'react'

const StyledCard = () => {
  return (
    <div style={{
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius : '10px',
        color : 'darkblue'
    }}>
        <h1 style={{fontSize:'2rem',marginBottom:"2rem"}}>Styled Card</h1>
        <p>
            1. Create a new file called `StyledCard.jsx`.
            <br/>
            2. Inside this file, create a functional component called `StyledCard`.
            <br/>
            3. Use inline styles to style the component:
            <br/>
            <br/>

            - Set the background color to light blue.
            <br/>
            - Set padding to `20px`.
            <br/>
            - Set border radius to `10px`.
            <br/>
            - Set text color to dark blue.
        </p>
    </div>
  )
}

export default StyledCard
