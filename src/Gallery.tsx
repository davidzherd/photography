import { useEffect, useState } from "react";
import { Flex } from "./components/styled/Flex.styled";
import Slider from "./components/Slider";
import { getImages } from "./api";
import { useContext } from "react";
import { GalleryContext } from "./Context";
import { places } from "./assets/placesConfig";
import { Navigate } from "react-router-dom";
import { Photo, Video } from "pexels";
declare global {
  interface Window {
    require: any;
  }
}
window.require = (name: string) => new URL(name, import.meta.url).href;
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
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M170.775 263.266C45.3695 89.9489 351.415 57.2556 235.074 265"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M223.927 294.786C208.714 303.727 197.077 301.397 183.349 292.717"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M223.931 323.947C209.382 329.705 191.961 332.227 179.771 321.113"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          opacity="0.503384"
          d="M200.609 264.023C205.622 256.118 213.14 177.545 195.739 180.506C177.592 183.597 183.172 214.637 200.609 217.109C230.615 221.366 231.089 172.082 212.779 191.558C204.814 200.032 202.007 211.527 194.927 220.563"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          opacity="0.503384"
          d="M216.241 90.0703C218.01 84.0801 217.416 77.9769 218.486 72"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          opacity="0.503384"
          d="M146.354 105.559C143.63 101.989 141.597 97.8004 139.193 93.9424"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          opacity="0.503384"
          d="M112.935 173.969C108.795 172.811 104.705 171.16 101 168.806"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          opacity="0.503384"
          d="M271.67 121.048C275.349 119.093 278.89 116.852 282.411 114.595"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          opacity="0.503384"
          d="M283.009 191.451C288.327 192.179 293.385 190.905 298.524 189.832"
          stroke={!darkTheme ? "#ffeb66" : "fff"}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
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
