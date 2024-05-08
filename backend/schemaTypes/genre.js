export const genre = {
    title: "Genre",
    name: "genres",
    type: "document",
    fields: [
        {
        title: "Name",
        name: "name",
        type: "string",
        },
        {
        title: "Genrelink",
        name: "genreurl",
        type: "slug",
        options: {
            source: "name",
            slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, "-")
            },
        }
    ],
}