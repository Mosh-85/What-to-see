import React from "react";
import { useEffect, useState } from "react";

export default function MovieCard({ movies, index }) {
  const [api, setApi] = useState();

  const search = movies?.imdbid;

  const fetchApiSearch = async () => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/${search}`;
    const apiClient = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fc7dd7c2a8msh7cb81de38856fa6p156d39jsnda84878f5c7f",
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, apiClient);
      const data = await response.json();
      setApi({
        title: data.results.titleText.text,
        image: data.results.primaryImage.url,
        release: data.results.releaseYear.year,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApiSearch(movies.imdbId);
  }, [movies.imdbId]);

  return (
    <>
      <li key={index}>
        <img
          src={api?.image}
          alt={api?.title + " " + "bilde"}
          width={300}
          height={420}
        />
        <a
          className="button"
          href={`https://www.imdb.com/title/${movies?.imdbid}`}
          target="_blank"
        >
          {" "}
          {api?.title} ({api?.release})
        </a>
      </li>
    </>
  );
}
