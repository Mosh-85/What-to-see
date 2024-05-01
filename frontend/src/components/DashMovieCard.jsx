export default function DashMovieCard({movie}) {

    if (movie) {
    return (
        <article>
            <p>{movie.id}</p>
            <p>{movie.originalTitleText.text}</p>
            <img src={movie.primaryImage.url} alt={`${movie.originalTitleText.text} cover image`} />
        </article>
        )
    } else {
        return null
    }
}
    
// denne funksjonskomponenten DashMovieCard tar inn en movie-prop, og
// hvis denne prop-en eksisterer, vises informasjonen om filmen (ID, tittel og bilde), ellers vises ingenting.
// Hvis det ikke er noen bilde-URL, vises ingenting.