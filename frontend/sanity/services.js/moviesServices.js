import { client } from "../client"

export async function fetchAllMovies() {
    const data = await client.fetch(`*[_type == "movies"]{
        _id,
        title,
        slug,
        imdbid,
    }`)
    return data
}