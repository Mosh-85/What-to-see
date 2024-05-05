import { Link } from "react-router-dom";
import { useEffect} from "react";
import { useState } from "react";
import { apiClient } from "../../imdbapi/apiClient"; // cspell:ignore imdbapi

// cspell:ignore imdb

export default function MovieCard({title, imdbId}) {

    const [IMDbImage, setIMDbImage] = useState();

    const fetchIMDbImage = async (movieId) => {

        const url = `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`;
        try {
            const response = await fetch(url,apiClient);
            const result = await response.json();
            setIMDbImage(
                {
                url: result.results.primaryImage.url,
                caption: result.results.primaryImage.caption.plainText 
            })
        } catch (error) { console
            .error(error);
        }

    }

    useEffect(() => {
        fetchIMDbImage(imdbId, setIMDbImage);
    }, [imdbId]);


    return (
       <article>
         <Link to={`https://www.imdb.com/title/${imdbId}`}>
            <picture>
                <source media="(min-width: 400px)" srcSet={IMDbImage?.url} />
                <img src={IMDbImage?.url} alt={IMDbImage?.caption} width= "300" height="500"></img> 
            </picture>
            </Link>
            <Link to={`https://www.imdb.com/title/${imdbId}`}>                
                <h1>{title}</h1>
            </Link>
        </article>
    )
}

// denne funksjonskomponenten MovieCard tar inn en title-prop og en imdbId-prop, og
// viser et bilde og en tittel, og lenker til imdb-siden for filmen.
// Hvis det ikke er noen bilde-URL, vises ingenting.
// Når komponenten monteres, hentes bildet fra imdb-apien, og når bildet er mottatt, vises det.
// Hvis det oppstår en feil, logges denne til konsollen.