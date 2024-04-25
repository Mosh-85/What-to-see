import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';

export default function MovieCard() {

    const [movie, setMovie] = useState([])
    const title = "Movie Title"
    const search = "tt0086250"

    const url = `https://moviesdatabase.p.rapidapi.com/titles/${search}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0c7b4fc9b2msh5fc5c97b90de63fp19885ajsnb445f20504d7',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }
    
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json()
                setMovie(result)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData()
      }, [])
    console.log(movie)
      
    return (
        <article>
            
            <h1>{title}</h1>
           {/*  <img src={movie[0]?.primaryImage[0].url} alt={movie[0]?.titleText[0].text}/> */}



             {/*    {p?.episode?.map((item, i) => <li key={i}><Episode name={item}/></li>)}
            
            {/*{post?.map(item => <PostCard key={item.id} title={item.title} category={item.category} id={item.id} ingress={item.ingress}/>)}*/}
        </article>
        
        )
}