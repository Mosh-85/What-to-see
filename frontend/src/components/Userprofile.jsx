import Loginfriend from "./Loginfriend"

export default function Userprofile({userName, user2Name, users, setLogedIn}) {
    return (
    <>
        <h3>Velkommen: {userName}</h3>
        <article>
            <p>Filmer jeg skal se!</p>
            <p>mappas her</p>
        </article>
        <article>
        <p>Disse filmerne ligger i ønskelisten din.</p>
        <p>mappas her</p>
        </article>
        <article>
            {user2Name = localStorage.getItem("loggedInUser2") ? (
                <>
                    <h4>Du ser med: {user2Name}</h4>
                </>
            ) : (
                    <Loginfriend users={users} setLogedIn={setLogedIn}/>
            )}
        </article>



        


    </>
    )
}