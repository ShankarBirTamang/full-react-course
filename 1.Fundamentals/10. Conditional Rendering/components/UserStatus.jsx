  // Use the && operator to display a message if the user is logged in:
  // If loggedIn is true, display: "Welcome back!"
  // If loggedIn is false, display nothing.

  import React from 'react'
  
  const UserStatus = ({loggedIn,isAdmin}) => {
    
    return (
    <>
      {loggedIn && isAdmin && <div>Welcome Admin!</div>}
      {loggedIn && !isAdmin && <div>Welcome User!</div>}
    </>    
    )
  }
  
  export default UserStatus
  