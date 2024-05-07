import Loginfriend from "./Loginfriend"
import MovieCard from "./MovieCard"


export default function Userprofile({userName, user2Name, users, setLogedIn, userId}) {
    return (
    <>
        <h3>Velkommen: {userName}</h3>
        <article>
            <p>Filmer jeg skal se!</p>
            <p>Disse filmene ligger ønskelisten din:</p>
            <MovieCard userId={userId}/> 
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