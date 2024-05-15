import Commonwishlist from "./Commonwishlist"
import Favoritlist from "./Favoritlist"
import Mixmatch from "./Mixmatch"
import Utforsk from "./Utforsk" 


export default function Dashboard({userName, user2Name, userId, user2Id}) {
    return (
    <main className="dash">
        <h1>Forslag for {userName} og {user2Name} </h1>

        <section>
            <Commonwishlist userId={userId} user2Id={user2Id} />
        </section>

      <section>
            <Favoritlist userId={userId} user2Id={user2Id} />
        </section> 

       <section>
            <Utforsk userId={userId} user2Id={user2Id}/>
        </section>   

        <section>
            <Mixmatch userId={userId} user2Id={user2Id} userName={userName} user2Name={user2Name}/>
        </section>
    </main>
    )
}