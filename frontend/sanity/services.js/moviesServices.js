import {client} from "../client"

export async function fetchAllMovies() {
    const data = await client.fetch(`*[_type == "movies"]{
        _id,
        name
    }`)
    return data
}