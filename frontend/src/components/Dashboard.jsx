import Wishlist from "./Wishlist"
import Favoritlist from "./Favoritlist"
import Utforsk from "./Utforsk"


export default function Dashboard({userName, user2Name}) {
    return (
    <>
        <h1>Forslag for {userName} og {user2Name} </h1>

        <section className="catch">
            <Wishlist />
        </section>

        <section className="gosafe">
            <Favoritlist />
        </section>

        <section className="utforsk">
            <Utforsk/>
        </section>
    </>
    )
}