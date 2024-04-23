export const users = {
    title: "Users",
    name: "users",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Email",
            name: "email",
            type: "string",
        },
        {
            title: "Age",
            name: "age",
            type: "number",
        },
        {
            title: "Favorit Genres",
            name: "favoritgenres",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "genres" }],
                },
            ],
        },
        {
            title: "Favorite Movies",
            name: "favorittemovies",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "movies" }],
                },
            ],
        },
        {
            title: "Wish List",
            name: "wishlist",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "movies" }],
                },
            ],
        }
    ],
};
    
