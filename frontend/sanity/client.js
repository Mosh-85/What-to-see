import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "3rr2vauw",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})

export  const writeClient = createClient({
    projectId: "3rr2vauw",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
    token: " skddFtIXG8Covtfy1QGrtdV4KG3ywT24Vs9zTLchiCJUSmCsDsgWshSaFNjRoWIu0jFV6fwzO3waSWQaOrsPb0dW9KTv9KAuqawD7u7j7C2d0wZiLIas86X33VfB6qoxxlC3aL45IiggQyBh844YfvbIvWfFov4GLkD1Kh8wDE19957v2SgM"
})