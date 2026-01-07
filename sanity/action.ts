import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: number;
}

export const getResourcesPlaylist = async () => {
    
     try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
        _id,
        title,
        "downloadLink": downloadlink,
        "image": poster.asset->url,
        views,
        slug,
        category
          }  
        }`
      );

    return resources ;
  } catch (error) {
    console.error(error);
  }
}




export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: page
      })}{
        _id,
        title,
       "downloadLink": downloadlink,
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
