import Loginfriend from "./Loginfriend"
import MovieCard from "./MovieCard"
import { Button } from "@mui/material"
import Wishlist from "./Wishlist";


export default function Userprofile({userName, user2Name, users, setLogedIn, userId}) {
    return (
    <>
        <h3>Velkommen: {userName}</h3>
        <article>
            <p>Filmer jeg skal se!</p>
            <p>Disse filmene ligger i ønskelisten din:</p>
            <Wishlist userId={userId}/>
        </article>
        <article>
            {user2Name = localStorage.getItem("loggedInUser2") ? (
                <>
                    <h4>Du ser med: {user2Name}</h4>
                    <Button
                        onClick={() => {
                        localStorage.removeItem("loggedInUser2");
                        localStorage.removeItem("loggedInUserName2");
                        setLogedIn("");
                    }}>
                        Bytt venn
                    </Button>
                </>
            ) : (
                    <Loginfriend users={users} setLogedIn={setLogedIn}/>
            )}
        </article>



        


    </>
    )
}