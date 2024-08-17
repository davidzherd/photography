import { createContext } from "react";

export const GalleryContext = createContext({
  currentGalleryTitle: "",
  currentGalleryId: "",
  changeGallery: (_gallery: { title: string; id: string }) => {},
});
