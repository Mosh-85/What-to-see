import Catchup from "./Catchup"
import Gosafe from "./Gosafe"
import Utforsk from "./Utforsk"


export default function Dashboard(logedIn, users) {
    return (
    <>
        <h1>FORSLAG FOR {logedIn} OG {user.name} </h1>

        <section>
            <Catchup />
        </section>

        <section>
            <Gosafe />
        </section>

        <section>
            <Utforsk/>
        </section>
    </>
    )
}