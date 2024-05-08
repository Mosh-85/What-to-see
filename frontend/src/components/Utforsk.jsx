import { useState, useEffect } from 'react';
import { fetchFavGenres } from '../../sanity/services.js/userServices';
import { Link } from 'react-router-dom';


export default function Utforsk({userId, user2Id}) {
    const [favGenres, setFavGenres] = useState(null)
    const [favGenres2, setFavGenres2] = useState(null)

    useEffect(() => { 
     const fetchData = async () => {
     const data = await fetchFavGenres(userId)
     setFavGenres(data[0].favoriteGenresName);
    }
     fetchData();
    }, [userId]);


   useEffect(() => { 
    const fetchData = async () => {
    const data = await fetchFavGenres(user2Id)
    setFavGenres2(data[0].favoriteGenresName);
   }
    fetchData();
   }, [user2Id]);

   

   const listCommonFavGenres = favGenres?.filter(genre1 =>
    favGenres2?.some(genre2 => genre2.name === genre1.name)
    ).map((genre, index) => {
    return (
      <ul>
        <li key={index}>  
          <Link to={`/genres/${genre.genreslug}`}>
            {genre.name}
          </Link>               
        </li>
      </ul>
    );
  });


   return (
    <article>
        {listCommonFavGenres && (
      <>
        <h3>FelleGenres!</h3>
        <p>Dere har {listCommonFavGenres.length} genres felles i ønskelisten deres</p>
        {listCommonFavGenres}

      </>
)}
    </article>
    )
}