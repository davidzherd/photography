import { createClient, ErrorResponse } from "pexels";

const key: string = import.meta.env.VITE_PEXELS_KEY as string;

const isErrorResponse = (data: any): data is ErrorResponse => {
  return data && data.error;
};

export const getImages = async (collectionId: string, nextPage?: number) => {
  const client = createClient(`${key}`);

  try {
    const data = await client.collections.media({
      per_page: 5,
      id: `${collectionId}`,
      page: nextPage ?? 1,
    });

    if (isErrorResponse(data)) {
      // Handle the error response appropriately
      console.error("Error fetching images:", data.error);
      return { media: [], total: 0, currentPage: 1 };
    }

    return {
      media: data.media,
      total: data.total_results,
      currentPage: data.page,
    };
  } catch (error) {
    // Handle unexpected errors
    console.error("Unexpected error:", error);
    return { media: [], total: 0, currentPage: 1 };
  }
};
