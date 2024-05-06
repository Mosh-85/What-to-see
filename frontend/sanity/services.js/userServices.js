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

export async function addFavGenre(userId, genreId) {
    const data = writeClient.patch(userId)
        .setIfMissing({ favoritgenres: [] })
        .insert("after", "favoritgenres[-1]", [{ _ref: genreId, _type: "reference" }])
        .commit({ autoGenerateArrayKeys: true })
        .then(() => { return "Genre added" })
        .catch((error) => { return "Genre not added: " + error.message });
    return data
}





export async function removeFavGenre(userId, genreId) {
    try {
        await writeClient.patch(userId)
            .unset([`favoritgenres[_ref=="${genreId}"]`])
            .commit();
        console.log("Genre reference removed successfully.");
        return true;
    } catch (error) {
        console.error('Failed to remove favorite genre:', error);
        return false;
    }
}









