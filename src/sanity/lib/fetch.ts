import { createClient } from "next-sanity";

const client = createClient({
    projectId:"ji328xk6",
    dataset:"production",
    useCdn: true,
    apiVersion: "2025-01-12"
})
export async function sanityFetch({query, params = {}}: {query: string; params?: any}) {
    return await client.fetch(query, params)
}
