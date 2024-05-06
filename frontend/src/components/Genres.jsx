import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { fetchAllGenres } from "../../sanity/services.js/genreServices";
import { fetchFavGenres, writeClientGenres } from "../../sanity/services.js/userServices";

export default function Genres({ userId }) {
  const [genres, setGenres] = useState([]);
  const [favGenres, setFavGenres] = useState([]);
  const [formMessage, setFormMessage] = useState("");
  const label = { inputProps: { "aria-label": "Fav-Toggle" } };
  

  useEffect(() => {
    const fetchData = async () => {
      const allGenres = await fetchAllGenres();
      setGenres(allGenres);

      const favGenresData = await fetchFavGenres(userId);
      setFavGenres(favGenresData[0].favoriteGenres);
    };

    fetchData();
  }, [userId]);


  const handleCheckboxChange = async (e, genreId) => {
    e.preventDefault();
    const result = await writeClientGenres(userId, favGenres);
    if (result === "Genre added") {
      setFormMessage(result);
      setFavGenres((prev) => {
        return [...prev, genreId];
      });
    } else {
      setFormMessage(result);
    }
  
    console.log("Genre ID: ", genreId);
  };
  console.log("Fav Genres: ", favGenres); 

  return (
    <section>
      <h1>Genres</h1>
      <p>{formMessage}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre._id}>
            {genre.name}
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              checked={favGenres.includes(genre._id)}
              onChange={(e) => handleCheckboxChange(e, genre._id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
