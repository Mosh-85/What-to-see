import { client, writeClient } from "../client"

export async function fetchAllUsers() {
    const data = await client.fetch(`*[_type == "users"]{
        _id,
        name
    }`)
    return data
}


export async function fetchFavGenres(userId) {
    const data = await client.fetch(`*[_type == "users" && _id == "${userId}"]{
        "favoriteGenres": favoritgenres[]._ref
    }`)
    return data
}


export async function writeClientGenres(userId, favGenres) {
    const data = await writeClient.patch('users', userId)
        .set({ favoritegenres: { _ref: favGenres, _type: reference } })
        .commit({ autoGenerateArrayKeys: true })
        .then(() => { return "Genre added" })
        .catch((error) => { return "Genre not added: " + error.message });
    return data

}









