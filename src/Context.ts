import { createContext } from "react";

export const GalleryContext = createContext({
  currentGalleryTitle: "",
  currentGalleryId: "",
  changeGallery: (gallery: { title: string; id: string }) => {},
});
