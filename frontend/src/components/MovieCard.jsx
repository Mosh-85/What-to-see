import { Link } from "react-router-dom";
import { useEffect} from "react";
import { useState } from "react";
import { apiClient } from "../../imdbapi/apiClient";



export default function MovieCard({title, imdbId}) {

    const [imdbImage, setImdImage] = useState();

    const fetchImdImage = async (movieId) => {

        const url = `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`;
        try {
            const respons= await response.json();
            setImdImage(
                {
                url: result.results.primaryImage.url,
                caption: result.results.primaryImage.caption.plainText 
            })
        } catch (error) { console
            .error(error);
        }

    }

    useEffect(() => {
        fetchImdImage(imdbId);
    }, [imdbId])



    return (
       <article>
         <Link to={`https://www.imdb.com/title/${imdbId}`}>
            <picture>
                <source media="(min-width: 400px)" srcSet={imdbImage?.url} />
                <img src={imdbImage?.url} alt={imdbImage?.caption} width= "300" height="500"></img> 
            </picture>
            </Link>
            <Link to={`https://www.imdb.com/title/${imdbId}`}>                
                <h3>{title}</h3>
            </Link>
        </article>
    )
}

// denne funksjonskomponenten MovieCard tar inn en title-prop og en imdbId-prop, og
// viser et bilde og en tittel, og lenker til imdb-siden for filmen.
// Hvis det ikke er noen bilde-URL, vises ingenting.
// Når komponenten monteres, hentes bildet fra imdb-apien, og når bildet er mottatt, vises det.
// Hvis det oppstår en feil, logges denne til konsollen.