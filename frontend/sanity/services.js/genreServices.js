import { client } from "../client"

export async function fetchAllGenres() {
  const data = await client.fetch(`*[_type == "genres"]{
        name,
        _id,
        "genreslug":genreurl.current
    }`)
  return data
}

export async function fetchMoviesBySlug(slug) {
  const data = await client.fetch(`*[_type == "genres" && categoryurl.current == $slug]{
      _id,
        name,
      }
    }`, { slug });
  return data;
}


