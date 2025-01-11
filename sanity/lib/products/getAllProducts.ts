import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

//after running typegen the type of the query will be generated
export const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(`
		*[
			_type == "product"
		] | order(name asc)`);

  try {
    // Use sanityFetch to send the query
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });

    return products.data || [];
  } catch (err) {
    console.error("Error fetching all products:", err);
    return [];
  }
};
