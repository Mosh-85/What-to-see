export const movies = {
    title: "Movies",
    name: "movies",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: doc => `${doc.title}-${doc.imdbid}`,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, "-")
            }
        },
        {
            title: "IMDB ID",
            name: "imdbid",
            type: "string",
        },
        {
            title: "Genres",
            name: "genres",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "genres" }],
                },
            ],
        },

    ],
};