import { fetchAllGenres } from "../../sanity/services.js/genreServices";
import { useEffect, useState } from "react";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  const getAllGenres = async () => {
    const data = await fetchAllGenres();
    setGenres(data);
  };

  useEffect(() => {
    getAllGenres();
  }, []);

  console.log(genres);

  return (
    <section>
      <h1>Genres</h1>
      <ul>
        {genres.map((genre, i) => (
          <li key={i}>{genre.name}</li>
        ))}
      </ul>
    </section>
  );
}
