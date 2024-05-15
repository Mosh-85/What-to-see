import { useState, useEffect } from 'react';
import { fetchFavGenres } from '../../sanity/services.js/userServices';
import { Link } from 'react-router-dom';


export default function Utforsk({userId, user2Id}) {
    const [favGenres, setFavGenres] = useState(null)
    const [favGenres2, setFavGenres2] = useState(null)


    useEffect(() => { 
      const fetchData = async () => {
      const data = await fetchFavGenres(userId);
      const combinedGenres = data[0].favoriteGenresName.map((genre, index) => ({
         name: genre.name,
         slug: data[0].genreslugs[index]
       }));
      setFavGenres(combinedGenres);
     }
     fetchData();
 }, [userId]);


   useEffect(() => { 
      const fetchData = async () => {
      const data = await fetchFavGenres(user2Id);
      const combinedGenres = data[0].favoriteGenresName.map((genre, index) => ({
         name: genre.name,
         slug: data[0].genreslugs[index]
       }));
      setFavGenres2(combinedGenres);
     }
    fetchData();
   }, [user2Id]);

   

  const listCommonFavGenres = favGenres?.filter(genre1 =>
   favGenres2?.some(genre2 => genre2.name === genre1.name)
   ).sort((a, b) => a.name.localeCompare(b.name))
   .map((genre, index) => {
    return (
        <li key={index}>  
          <Link to={`/genres/${genre.slug}`}>
            {genre.name}
          </Link>               
        </li>
    );
  });


   return (
    <article className='utforsk'>
        {listCommonFavGenres && (
      <>
        <h3>Felles Sjangere!</h3>
        <p>Dere har {listCommonFavGenres.length} sjangere felles i ønskelisten deres</p>
        <ul className="utforsk">
          {listCommonFavGenres.length > 0 ? listCommonFavGenres : <p>Ingen felles genres</p>}
        </ul>


      </>
)}
    </article>
    )
}