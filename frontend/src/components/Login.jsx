import React from 'react';

export default function Login({ users, setLogedIn}) {
  
  return (
    <section className="login">
      <h3>Hvem skal se i dag?</h3>
      <p>Velg bruker:</p>
      <div className="user-list">
        {users.map((user, i) => (
            <button key={i} variant="contained" onClick={() => {
                localStorage.setItem("loggedInUser", user._id)
                localStorage.setItem("loggedInUserName", user.name)
                setLogedIn(user.name)
              }}>
              {user.name}
            </button>
        ))}
      </div>
    </section>
  )
}



