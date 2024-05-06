import Catchup from "./Catchup"
import Gosafe from "./Gosafe"
import Utforsk from "./Utforsk"


export default function Dashboard({userName, user2Name}) {
    return (
    <>
        <h1>Forslag for {userName} og {user2Name} </h1>

        <section className="catch">
            <Catchup />
        </section>

        <section className="gosafe">
            <Gosafe />
        </section>

        <section className="utforsk">
            <Utforsk/>
        </section>
    </>
    )
}