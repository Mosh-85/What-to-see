import Wishlist from "./Wishlist"
import Favoritlist from "./Favoritlist"
// import Utforsk from "./Utforsk"


export default function Dashboard({userName, user2Name, userId, user2Id}) {
    return (
    <>
        <h1>Forslag for {userName} og {user2Name} </h1>

        <section className="catch">
            <Wishlist userId={userId} user2Id={user2Id} />
        </section>

     <section className="gosafe">
            <Favoritlist userId={userId} user2Id={user2Id} />
        </section>

{/*         <section className="utforsk">
            <Utforsk/>
        </section> */}
    </>
    )
}