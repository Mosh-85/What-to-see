import Commonwishlist from "./Commonwishlist"
import Favoritlist from "./Favoritlist"
import Utforsk from "./Utforsk" 


export default function Dashboard({userName, user2Name, userId, user2Id}) {
    return (
    <>
        <h1>Forslag for {userName} og {user2Name} </h1>

        <section>

        <article className="catch">
            <Commonwishlist userId={userId} user2Id={user2Id} />
        </article>

      <sarticle className="gosafe">
            <Favoritlist userId={userId} user2Id={user2Id} />
        </sarticle> 

       <article className="utforsk">
            <Utforsk userId={userId} user2Id={user2Id}/>
        </article>
        </section>
    </>
    )
}