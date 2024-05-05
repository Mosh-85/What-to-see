import Catchup from "./Catchup"
import Gosafe from "./Gosafe"
import Utforsk from "./Utforsk"

export default function Dashboard() {
    return (
    <>
        <h1>FORSLAG FOR -- x -- OG -- x -- </h1>

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