import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

//after running typegen the type of the query will be generated
export const getMyOrders = async (userId: string) => {
  const MY_ORDERS_QUERY = defineQuery(`
		*[
			_type == "order" && clerkUserId == $userId
		] | order(orderDate desc) {
			...,
			products[]{
				...,
				product-> 
			}
		}`);

  try {
    // Use sanityFetch to send the query
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });

    return orders.data || [];
  } catch (err) {
    console.error("Error fetching all products:", err);
    return [];
  }
};
