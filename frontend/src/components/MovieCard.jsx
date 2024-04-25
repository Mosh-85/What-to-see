import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


export default async function MovieCard(){
    const {seriesId} = useParams()
    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/series/${seriesId}`,
        headers: {
            'X-RapidAPI-Key': 'cff237dd6dmsheeaf6ba53431905p1d9a3cjsn0b123f5b7364',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const movie = response.data;
        return (
            <div className="movieCard">
                <nav>
                    <Link to={"/"} className="homeButton">Hjem</Link>
                    {movie ? <>{` > ${movie.title}`}</> : null}
                </nav>
                <section className="movieCardContent">
                    {movie ? (
                        <>
                            <img src={movie.poster_url} alt={`Plakatbilde for ${movie.title}`} />
                            <div>
                                <h1>{movie.title}</h1>
                                <h2>{movie.year}</h2>
                                <h4>IMDb-lenke:</h4>
                                <ul className="imdbLink">
                                    <li><Link to={`https://www.imdb.com/title/${movie.imdb_id}`}>IMDb-link</Link></li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <p>Fant ingen informasjon om denne filmen/serien.</p>
                    )}
                </section>
            </div>
        );
    } catch (error) {
        console.error(error);
        return <p>Noe gikk galt ved henting av filmdata.</p>;
    }
}
