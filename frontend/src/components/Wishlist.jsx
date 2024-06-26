import React from "react";
import { fetchFavWish } from "../../sanity/services.js/userServices";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

export default function Wishlist({ userId }) {
  const [wishMovies, setWishMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFavWish(userId);
      setWishMovies(data[0].wishlist);
    };
    fetchData();
  }, [userId]);

  const listWishMovies = wishMovies
    ?.sort((a, b) => a.title.localeCompare(b.title))
    .map((movies, index) => {
      return <MovieCard movies={movies} index={index} key={index} />;
    });

  return <>{listWishMovies}</>;
}
