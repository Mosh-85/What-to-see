import Loginfriend from "./Loginfriend"
import Wishlist from "./Wishlist"
import { Link } from "react-router-dom"
import { BsStars } from "react-icons/bs"

export default function Userprofile({userName, user2Name, users, setLogedIn, userId}) {
    return (
    <div className="uProfile">
        <h2>Velkommen: {userName}</h2>
        <article>
            <p> <BsStars /> Filmer jeg skal se!</p>
            <p>Disse filmene ligger i ønskelisten din:</p>
            <ul className="article-card">
            <Wishlist userId={userId}/>
            </ul>
            
        </article>
        <article>
            {user2Name = localStorage.getItem("loggedInUser2") ? (
                <>
                    <h3>Du ser med: {user2Name}</h3>
                    <Link
                        className="button"
                        onClick={() => {
                        localStorage.removeItem("loggedInUser2");
                        localStorage.removeItem("loggedInUserName2");
                        setLogedIn("");
                    }}>
                        Bytt venn
                    </Link>
                </>
            ) : (
                    <Loginfriend users={users} setLogedIn={setLogedIn}/>
            )}
        </article>
    </div>
    )
}