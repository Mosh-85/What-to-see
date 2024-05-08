import { client } from "../client"

export async function fetchAllGenres() {
  const data = await client.fetch(`*[_type == "genres"]{
        name,
        _id,
        "genreslug":genreurl.current
    }`)
  return data
}

export async function fetchMoviesBySlug(upperslug) {
  const data = await client.fetch(`*[_type == "movies" && "${upperslug}" in genres[]->name] {
    _id,
    title,
    imdbid,
    "genres": genres[]-> {
      name
    }
  }`, { upperslug });
  return data;
}


