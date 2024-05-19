import { useEffect, useState } from "react";
import { fetchAllGenres } from "../../sanity/services.js/genreServices";
import {
  addFavGenre,
  fetchFavGenres,
  removeFavGenre,
} from "../../sanity/services.js/userServices";
import { Link } from "react-router-dom";

export default function Genres({ userId }) {
  const [genres, setGenres] = useState([]);
  const [favGenres, setFavGenres] = useState([]);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allGenres = await fetchAllGenres();
      setGenres(allGenres.sort((a, b) => a.name.localeCompare(b.name)));

      const favGenresData = await fetchFavGenres(userId);
      setFavGenres(favGenresData[0].favoriteGenres);
    };

    fetchData();
  }, [userId]);

  const handleCheckboxChange = async (e, genreId) => {
    e.preventDefault();
    try {
      if (favGenres.includes(genreId)) {
        await removeFavGenre(userId, genreId);
        setFavGenres(favGenres.filter((id) => id !== genreId));
        setFormMessage("Genre removed from favorites.");
      } else {
        await addFavGenre(userId, genreId);
        setFavGenres([...favGenres, genreId]);
        setFormMessage("Genre added to favorites.");
      }
    } catch (error) {
      setFormMessage("Error updating favorites. Please try again.");
    }
  };

  return (
    <main className="genres">
      <h2>Alle sjangere</h2>
      <p>{formMessage}</p>
      <ul>
        {genres.map((genre) => (
          <li className="pos" key={genre.genreslug}>
            <Link className="button" to={`/genres/${genre.genreslug}`}>
              {genre.name}
            </Link>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={favGenres.includes(genre._id)}
                onChange={(e) => handleCheckboxChange(e, genre._id)}
              />
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}
