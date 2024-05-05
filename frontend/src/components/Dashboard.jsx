import Catchup from "./Catchup"
import Gosafe from "./Gosafe"
import Utforsk from "./Utforsk"


export default function Dashboard() {
    return (
    <>
        <h1>FORSLAG FOR X OG X </h1>

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