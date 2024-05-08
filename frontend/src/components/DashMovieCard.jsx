import { useState } from "react"

export default function DashMovieCard({movie}) {

        const [imdbImage] = useState({
            url: movie.primaryImage.url,
            caption: movie.primaryImage.caption.plainText
        })
    
        if (movie) {
            return (
                <article>
                    <picture>
                        <source media="(min-width:300px)" srcSet={imdbImage?.url}/>
                        <img src={imdbImage?.url} alt={imdbImage?.caption}  width="300" height="420"></img>
                    </picture>
                    <p>{`${movie.originalTitleText.text} (${movie.releaseYear.year})`}</p>
                    
                </article>
                
            )
        } else {
            return null
        }
    }


    
// denne funksjonskomponenten DashMovieCard tar inn en movie-prop, og
// hvis denne prop-en eksisterer, vises informasjonen om filmen (ID, tittel og bilde), ellers vises ingenting.
// Hvis det ikke er noen bilde-URL, vises ingenting.