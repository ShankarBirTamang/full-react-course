import { useState } from 'react'

function Profile() {
    const [profile,setProfile] = useState({
        name: "Sankar",
        age: "29"
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        setProfile((prev) =>(
            {
                ...prev ,
                [name]: value
            }
        ) );
    }

  return (
    <>
     <h2>User Profile</h2>
     <div>
        <label>
            Name:
            <input 
                type = "text"
                name = "name"
                value = {profile.name}
                onChange = {handleChange}
            />
        </label>
     </div>
     <div>
        <label>
            Age:
            <input 
                type = "number"
                name = "age"
                value = {profile.age}
                onChange = {handleChange}
            />
        </label>
     </div>
      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </>
  )
}

export default Profile
