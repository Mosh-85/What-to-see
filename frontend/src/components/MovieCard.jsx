import React from 'react'

export default function MovieCard({Movies, Movies2}) {

    const favorite = Movies?.map((movies, index) => {
      return (
        <li key={index}>
          <h2>{movies.title}</h2>
        </li>
      )
    }) 

    const favorite2 = Movies2?.map((movies, index) => {
      return (
        <li key={index}>
          <h2>{movies.title}</h2>
        </li>
      )
    }) 
    
    return (
      <div>
        <ul> {favorite} </ul>
        <ul> {favorite2} </ul>
      </div>
    )
  }
  






/*   const [movie, setMovie] = useState(null)
  const search = "tt0086250" */


/* useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fc7dd7c2a8msh7cb81de38856fa6p156d39jsnda84878f5c7f',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      }

      try {
        const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${search}`, options);
        const data = await response.json()

        if (data && data.results) {
          setMovie({
            title: data.results.titleText.text, 
            image: data.results.primaryImage.url
          })
        } else {
          setMovie(null)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        setMovie(null)
      }
    }

    fetchData()
  }, []) */