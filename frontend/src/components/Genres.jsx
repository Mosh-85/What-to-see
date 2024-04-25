import { fetchAllGenres } from "../../sanity/services.js/genreServices";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { fetchFavGenres } from "../../sanity/services.js/userServices";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const label = { inputProps: { "aria-label": "Fav-Toggle" } };

  const getAllGenres = async () => {
    const data = await fetchAllGenres();
    setGenres(data);
  };

  const getFavGenres = async () => {
    const favGenres = await fetchFavGenres();
  };
  

  const handleCheckboxChange = (e, i) => {
    console.log(e.target.checked);
    console.log(i);
  };




  useEffect(() => {
    getAllGenres();
    getFavGenres();
  }, []);

  return (
    <section>
      <h1>Genres</h1>
      <ul>
        {genres.map((genre, i) => (
          <li key={i}>
            {genre.name}
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              onChange={(e) => handleCheckboxChange(e, i)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
