import { useState } from "react";
import Arrow from "./Arrow";
import { styled } from "styled-components";
import { Text } from "./styled/Text.styled";

const SliderWrapper = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0;
`;

const MyImage = styled.img`
  max-width: 80%;
  max-height: 85%;
  box-shadow: hsla(0, 0%, 0%, 0.5) 5px 5px 20px;
`;
interface srcData {
  original: string;
  landscape: string;
  large2x: string;
  large: string;
  portrait: string;
}
interface imageData {
  src: srcData;
  width: number;
  height: number;
}
interface Props {
  imagesArray: Array<imageData>;
  darkTheme: boolean;
  handleNextPage: Function;
  handlePrevPage: Function;
}
function Slider({
  imagesArray,
  darkTheme,
  handleNextPage,
  handlePrevPage,
}: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(imagesArray);
  const nextImage = async () => {
    if (currentImage < 4) {
      setCurrentImage((current) => current + 1);
    } else {
      await handleNextPage();
      setCurrentImage(0);
    }
  };
  const prevImage = async () => {
    if (currentImage != 0) {
      setCurrentImage((current) => current - 1);
    } else {
      await handlePrevPage();
      setCurrentImage(imagesArray.length - 1);
    }
  };
  if (imagesArray === undefined || imagesArray.length === 0) {
    return (
      <Text size={2} weight="300" color={darkTheme ? "white" : "black"}>
        No images
      </Text>
    );
  } else {
    return (
      <SliderWrapper>
        <div style={{ cursor: "pointer" }} onClick={prevImage}>
          <Arrow size={2} color={darkTheme ? "white" : "black"} right={false} />
        </div>
        {imagesArray[currentImage].width / imagesArray[currentImage].height <=
        1 ? (
          <MyImage
            src={imagesArray[currentImage].src.portrait.replace(
              /&fit=crop/g,
              ""
            )}
          />
        ) : (
          <MyImage
            src={imagesArray[currentImage].src.landscape.replace(
              /&fit=crop/g,
              ""
            )}
          />
        )}
        <div style={{ cursor: "pointer" }} onClick={nextImage}>
          <Arrow size={2} color={darkTheme ? "white" : "black"} right={true} />
        </div>
      </SliderWrapper>
    );
  }
}

export default Slider;
