import {link} from 'react-router-dom';


export default function MovieCard({title,image,imageText,imdbId}) {
    return (
       <article>
         <Link to={`https://www.imdb.com/title/${imdbId}`}>
                <img src={image} alt={imageText} ></img>
                <h3>{title}</h3>
            </Link>
        </article>
    )
}