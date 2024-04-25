import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { fetchFavGenres } from "../../sanity/services.js/userServices";
import { fetchAllGenres } from "../../sanity/services.js/genreServices";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [favGenres, setFavGenres] = useState([]);

  const label = { inputProps: { "aria-label": "Fav-Toggle" } };

  useEffect(() => {
    const fetchData = async () => {
      const allGenres = await fetchAllGenres();
      setGenres(allGenres);

      const favGenres = await fetchFavGenres();
      setFavGenres(favGenres);
  };

  fetchData();
  }, []);
  

  const handleCheckboxChange = (genreId) => {
    const updatedFavGenres = favGenres.includes(genreId)
      ? favGenres.filter((id) => id !== genreId)
      : [...favGenres, genreId];
    
    setFavGenres(updatedFavGenres);
  };


  console.log(favGenres);


  return (
    <section>
      <h1>Genres</h1>
      <ul>
        {genres.map(( genre) => (
          <li key={genre._id}>
            {genre.name}
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              checked={favGenres.includes(genre._id)}
              onChange={() => handleCheckboxChange(genre._id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
