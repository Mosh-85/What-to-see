import {link} from "react-router-dom";
import {useState, useEffect} from "react";
import { apiClient } from "../../imdbapi/apiClient";



export default function MovieCard({title, imdbId}) {

    const [imdImage, setImdImage] = useState();

    const fetchImdImage = async (movieId) => {

        const url = `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`;
        try {
            const respons=  await response.json();
            setImdImage({
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
                <source media="(min-width: 400px)" srcSet={imdImage?.url} />
                <img src={imdImage?.url} alt={imdImage?.caption} width= "300" height="500"></img> 
            </picture>
            </Link>
            <Link to={`https://www.imdb.com/title/${imdbId}`}>                
                <h3>{title}</h3>
            </Link>
        </article>
    )
}