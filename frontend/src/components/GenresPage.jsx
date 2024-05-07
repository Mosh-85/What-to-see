import { useState } from "react";
import { useParams, useEffect } from "react-router-dom";

export default function GenresPage() {

    const { slug } = useParams();
     const [genre, setGenre] = useState(null);
  
    const getProductBySlug = async (slug) => {
      const data = await fetchGenreBySlug(slug);
      setGenre(data[0]);
    };
  
    useEffect(() => {
      getProductBySlug(slug);
    }, [slug]);

    console.log(genre);

    return (
        <section>
            <h1>test genres</h1>
        </section>


    );
}