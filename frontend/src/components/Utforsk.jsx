import { useState, useEffect } from 'react';
import { fetchFavGenres } from '../../sanity/services.js/userServices';

export default function Utforsk({userId, user2Id}) {

    const [favGenres, setFavGenres] = useState(null)
    const [favGenres2, setFavGenres2] = useState(null)

    console.log("Userid",userId)
    console.log("User2id",user2Id)
    console.log("FavGenres",favGenres)
    console.log("FavGenres2",favGenres2)



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

   const listCommonFavGenres = favGenres?.filter(movie1 =>
    favGenres2?.some(movie2 => movie2.title === movie1.title)
  ).map((movies, index) => {
    return (
      <ul>
        <li>
            {listCommonFavGenres}
        </li>
      </ul>
    );
  });
console.log(listCommonFavGenres)

   return (
    <section>
        {listCommonFavGenres && (
    <>
      
        <h3>Deres ønskeliste!</h3>
        <p>Dere har {listCommonFavGenres.length} film(er) felles i ønskelisten deres</p>
        
            <li>
                {listCommonFavGenres}
            </li>


        
    </>
)}
    </section>
    )
}