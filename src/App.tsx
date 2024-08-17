import { useState } from "react";
import Header from "./components/Header";
import Home from "./Home";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import NoPage from "./NoPage";
import Gallery from "./Gallery";
import { GalleryContext } from "./Context";
import Hire from "./Hire";

interface GalleryObj {
  title: string;
  id: string;
}
function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState({ title: "", id: "" });
  const handleGalleryChange = (galleryObj: GalleryObj) => {
    setCurrentGallery({ title: galleryObj.title, id: galleryObj.id });
  };
  const handleMenuButton = () => {
    setMenuIsOpen((prev) => !prev);
  };
  return (
    <div onClick={() => setMenuIsOpen(false)}>
      <BrowserRouter>
        <GalleryContext.Provider
          value={{
            currentGalleryTitle: currentGallery.title,
            currentGalleryId: currentGallery.id,
            changeGallery: (e) => handleGalleryChange(e),
          }}
        >
          <Header menuAction={handleMenuButton} />
          {menuIsOpen && <Menu action={handleMenuButton} />}
          <Routes>
            <Route path="/photography/" element={<Home />} />
            <Route path="/photography/about" element={<About />} />
            <Route path="/photography/hire" element={<Hire />} />
            <Route
              path="/photography/gallery/:galleryId"
              element={<Gallery />}
            />
            <Route path="/photography/*" element={<NoPage />} />
          </Routes>
        </GalleryContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
