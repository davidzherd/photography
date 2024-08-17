import { styled } from "styled-components";
import { Text } from "./styled/Text.styled";
import { Wrapper } from "./styled/Wrapper.styled";
import socialMedia from "../assets/smData";
import { Flex } from "./styled/Flex.styled";
import { places } from "../assets/placesConfig";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GalleryContext } from "../Context";

export const MenuStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  z-index: 10;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    cursor: pointer;
    transition: 0.3s;
    z-index: 10;
  }
  p {
    cursor: pointer;
     z-index: 10;
  }
  p:hover {
    color: rgba(0, 0, 0, 0.5);
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
  }
    .nopointer{
      font-size: 2rem;
       z-index: 10;
    }
  .nopointer:hover {
    cursor: default;
    color: white;
    text-shadow: none;

  }
  img:hover {
    scale: 0.9;
  }
  @media (width < 750px){
  width: 100vw;
  height: 100vh;
  padding: 1.5rem 0;
  background-color: rgba(0, 0, 0, 0.85);
  }
  }
`;
interface Props {
  action: Function;
}
interface Place {
  title: string;
  id: string;
}
function Menu({ action }: Props) {
  const galleryCtx = useContext(GalleryContext);
  const handleGallerySelection = (place: Place) => {
    galleryCtx.changeGallery(place);
    action();
  };

  return (
    <Wrapper side="right" mt="87px">
      <MenuStyled>
        <Text weight="300" className="nopointer">
          WATCH MY WORK
        </Text>
        {places.map((place) => (
          <div
            onClick={() => handleGallerySelection(place)}
            key={`div-${place.id}`}
          >
            <Link to={`photography/gallery/${place.id}`} key={`l${place.id}`}>
              <Text weight="700" key={`l${place.id}`}>
                {place.title}
              </Text>
            </Link>
          </div>
        ))}
        <Text weight="300" className="nopointer">
          LEARN MORE
        </Text>
        <Link to="/photography/about">
          <Text weight="700">ABOUT ME</Text>
        </Link>
        <Link to="/photography/hire">
          <Text weight="700">HIRE ME</Text>
        </Link>
        <Flex>
          {socialMedia.map((media, index) => (
            <img src={media.icon} alt={media.name} key={index} />
          ))}
        </Flex>
      </MenuStyled>
    </Wrapper>
  );
}

export default Menu;
