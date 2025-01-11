import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

//after running typegen the type of the query will be generated
export const getAllCategories = async () => {
	const ALL_CATEGORIES_QUERY = defineQuery(`
		*[
			_type == "category"
		] | order(name asc)`)

		try{
			// Use sanityFetch to send the query
			const categories = await sanityFetch({
				query: ALL_CATEGORIES_QUERY,
			});

			return categories.data || []
		}catch(err) {
			console.log("Error fetching all categories:", err)
			return []
		}
}