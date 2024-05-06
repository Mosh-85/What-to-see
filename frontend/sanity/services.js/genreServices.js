import { client } from "../client"

export async function fetchAllGenres() {
    const data = await client.fetch(`*[_type == "genres"]{
        _id,
        name
    }`)
    return data
}


