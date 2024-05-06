import { client } from "../client"

export async function fetchAllGenres() {
    const data = await client.fetch(`*[_type == "genres"]{
        name,
        _id
    }`)
    return data
}


