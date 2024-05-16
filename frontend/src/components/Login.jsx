import React from 'react';
import { Link } from 'react-router-dom';

export default function Login({ users, setLogedIn}) {
  
  return (
    <div className="login">
      <h2>Hvem skal se i dag?</h2>
      <p>Velg bruker:</p>
        {users.map((user, i) => (
            <Link className="button" key={i} variant="contained" onClick={() => {
                localStorage.setItem("loggedInUser", user._id)
                localStorage.setItem("loggedInUserName", user.name)
                setLogedIn(user.name)
              }}>
              {user.name}
            </Link>
        ))}
      </div>
    
  )
}



