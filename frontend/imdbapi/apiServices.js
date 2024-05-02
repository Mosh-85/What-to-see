import  { apiClient } from "./apiClient"


export const getMovieData = async (imdbID) => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/${imdbID}`
    return await fetch(url, apiClient)
    .then(response => response.json())
    .catch(error => console.error(error))
    
}

export const getMoviesData = async (moviesList) => {
    const moviesData = []
    for (const movie of moviesList) {
        const movieData = await getMovieData(movie.imdbid); 
        moviesData.push(movieData.results)
    }
    return moviesData
    
}

//Henter data om en film fra imdb-apien, 
//Henter data om en liste med alle filmer fra imdb-apien,