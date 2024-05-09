export default function Login({ users, setLogedIn}) {
  

  return (
    <section className="login">
      <h3>Hvem skal se i dag?</h3>
      <p>Velg bruker:</p>

      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <button
              variant="contained"
              onClick={() => {
                localStorage.setItem("loggedInUser", user._id);
                localStorage.setItem("loggedInUserName", user.name);
                setLogedIn(user.name);
              }}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
