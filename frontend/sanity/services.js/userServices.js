import { client } from "../client"

export async function fetchAllUsers() {
    const data = await client.fetch(`*[_type == "users"]{
        _id,
        name
    }`)
    return data
}

const user = localStorage.getItem('loggedInUser')

export async function fetchFavGenres() {
    const data = await client.fetch(`*[_type == "users" && _id == "${user}"]{
        favoritgenres
    }`)
    return data
}