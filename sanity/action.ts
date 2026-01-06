import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page)
      })}{
        _id,
        title,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
    );

    //console.log("SANITY RESOURCES 👉", resources);

    return resources ;
  } catch (error) {
    console.error(error);
  }
};
