import { useEffect, useState } from "react";
import { Flex } from "./components/styled/Flex.styled";
import Slider from "./components/Slider";
import { getImages } from "./api";
import { useContext } from "react";
import { GalleryContext } from "./Context";
import { places } from "./assets/placesConfig";
import { Navigate } from "react-router-dom";
import { Photo, Video } from "pexels";

// Define types for media items
type MediaItem = Photo | Video; // Assuming Photo and Video are already defined elsewhere

function Gallery() {
  const galleryCtx = useContext(GalleryContext);
  const darkColor = "#333";
  const lightColor = "#FAF9F6";
  const [darkTheme, setDarkTheme] = useState(true);
  const [images, setImages] = useState<MediaItem[]>([]); // Explicitly type state
  const [total, setTotal] = useState(0);
  const [nextPage, setNextPage] = useState(2);
  const [validGallery, setValidGallery] = useState(true);

  const getData = async (id: string, page?: number) => {
    const imageData = await getImages(id, page ?? 1);
    setImages(imageData.media);
    setNextPage(imageData.currentPage + 1);
    setTotal(imageData.total);
  };

  const checkGalleryValidity = () => {
    const urlId = window.location.pathname.slice(21);
    const newPlace = places.find((place) => place.id === urlId);
    if (urlId === galleryCtx.currentGalleryId) {
      return;
    } else if (newPlace !== undefined) {
      galleryCtx.changeGallery({ title: newPlace.title, id: newPlace.id });
    } else {
      console.log("No such gallery");
      setValidGallery(false);
    }
  };

  const calcLastPage = () => {
    return Math.ceil(total / 5);
  };

  const handleNextPage = async () => {
    (nextPage - 1) * 5 >= total
      ? await getData(galleryCtx.currentGalleryId, 1)
      : await getData(galleryCtx.currentGalleryId, nextPage);
  };

  const handlePrevPage = async () => {
    if (nextPage - 2 === 0) {
      const lastPage = calcLastPage();
      await getData(galleryCtx.currentGalleryId, lastPage);
    } else {
      await getData(galleryCtx.currentGalleryId, nextPage - 2);
    }
  };

  useEffect(() => {
    checkGalleryValidity();
    getData(galleryCtx.currentGalleryId);
  }, [galleryCtx.currentGalleryId]);

  const lightBulb = (
    <svg
      width="2rem"
      height="2rem"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={!darkTheme ? "#fde64e" : "white"}
    >
      {/* SVG content */}
    </svg>
  );

  return (
    <div
      style={{
        background: darkTheme ? darkColor : lightColor,
        width: "100vw",
        height: "100vh",
        textAlign: "center",
      }}
    >
      {!validGallery ? <Navigate to="/photography/*" /> : null}
      <Flex
        direction="row"
        style={{ marginTop: "6rem", justifyContent: "center" }}
      >
        <h1 style={{ color: darkTheme ? lightColor : darkColor }}>
          {galleryCtx.currentGalleryTitle}
        </h1>
        <div
          style={{
            padding: "1px",
            border: darkTheme
              ? `${lightColor} solid 1px`
              : `${darkColor} solid 1px`,
            borderRadius: "50%",
            marginLeft: "4px",
            cursor: "pointer",
            background: darkTheme ? "#333" : "dark",
            transition: "all 0.3s",
          }}
          onClick={() => setDarkTheme((current) => !current)}
        >
          {lightBulb}
        </div>
      </Flex>
      <div
        style={{
          marginTop: "1rem",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <Slider
          imagesArray={images}
          darkTheme={darkTheme}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
      {/* <div style={{ display: "none" }}>
        {images.map((image) => (
          <img src={image.src.original} />
        ))}
      </div> */}
    </div>
  );
}

export default Gallery;
