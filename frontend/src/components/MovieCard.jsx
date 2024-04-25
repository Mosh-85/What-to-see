import React, { useEffect } from 'react';

export default function MovieCard() {
    useEffect(() => {
        const url = 'https://imdb146.p.rapidapi.com/v1/title/?id=tt0087884';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cff237dd6dmsheeaf6ba53431905p1d9a3cjsn0b123f5b7364',
                'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                const list = data.d;
                list.map((item) => {
                    const name = item.l;
                    const poster = item.i.imageUrl;
                    const movie = `<li><img src="${poster}" alt="${name}"></h2></li>`;
                    document.querySelector('movie-list').innerHTML += movie;
                });
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return null;
}

    