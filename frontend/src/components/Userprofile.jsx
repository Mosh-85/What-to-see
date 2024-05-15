import Loginfriend from "./Loginfriend"
import Wishlist from "./Wishlist"
import { BsStars } from "react-icons/bs"

export default function Userprofile({userName, user2Name, users, setLogedIn, userId}) {
    return (
    <>
        <h2>Velkommen: {userName}</h2>
        <article>
            <p> <BsStars /> Filmer jeg skal se!</p>
            <p>Disse filmene ligger i ønskelisten din:</p>
            <ul>
            <Wishlist userId={userId}/>
            </ul>
            
        </article>
        <article>
            {user2Name = localStorage.getItem("loggedInUser2") ? (
                <>
                    <h4>Du ser med: {user2Name}</h4>
                    <button
                        onClick={() => {
                        localStorage.removeItem("loggedInUser2");
                        localStorage.removeItem("loggedInUserName2");
                        setLogedIn("");
                    }}>
                        Bytt venn
                    </button>
                </>
            ) : (
                    <Loginfriend users={users} setLogedIn={setLogedIn}/>
            )}
        </article>



        


    </>
    )
}