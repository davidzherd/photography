import { createClient } from "pexels";

const key: string = import.meta.env.VITE_PEXELS_KEY as string;
export const getImages = async (collectionId: string, nextPage?: number) => {
  const client = createClient(`${key}`);
  const data = await client.collections.media({
    per_page: 5,
    id: `${collectionId}`,
    page: nextPage ?? 1,
  });
  console.log(data);
  if (typeof data === "object") {
    return {
      media: data.media,
      total: data.total_results,
      currentPage: data.page,
    };
  } else {
    return { media: [], total: 0, currentPage: 1 };
  }
};
