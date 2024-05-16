import React from 'react';

export default function Login({ users, setLogedIn}) {
  
  return (
    <div className="login">
      <h2>Hvem skal se i dag?</h2>
      <p>Velg bruker:</p>
        {users.map((user, i) => (
            <button className="button" key={i} variant="contained" onClick={() => {
                localStorage.setItem("loggedInUser", user._id)
                localStorage.setItem("loggedInUserName", user.name)
                setLogedIn(user.name)
              }}>
              {user.name}
            </button>
        ))}
      </div>
    
  )
}



