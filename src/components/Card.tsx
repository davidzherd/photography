import { styled } from "styled-components";

export const CardStyled = styled.div<{
  image?: string;
}>`
  overflow: hidden;
  position: relative;
  display: inline-block;
  box-shadow: 2px 2px 15px black;
  border-radius: 0.5rem;
  width: 30rem;
  height: 35rem;
  margin-inline: 2rem;
  margin-block: 1rem;
  text-align: center;
  background-size: cover;
  background-image: ${({ image }) =>
    image === undefined ? "none" : `url(${image})`};
  z-index: 0;

  .details {
    overflow: hidden;
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: 0.5s;
    background: rgb(40, 40, 40);
    background: linear-gradient(
      180deg,
      rgba(40, 40, 40, 0.9) 20%,
      rgba(84, 84, 84, 0.8) 50%,
      rgba(185, 185, 185, 0.3) 100%
    );
    height: 0%;
    width: 100%;
    gap: 1rem;
    z-index: 0;
  }
  &:hover {
    .details {
      opacity: 1;
      display: flex;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 100%;
    }
  }
  @media (width < 1650px) {
    width: 20rem;
    height: 25rem;
  }
  @media (width < 1200px) {
    display: block;
    width: 30rem;
    height: 35rem;
  }
  @media (width < 750px) {
    width: 20rem;
    height: 25rem;
  }
`;
