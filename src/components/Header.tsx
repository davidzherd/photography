import { styled } from "styled-components";
import { Flex } from "./styled/Flex.styled";
import { Button } from "./Button";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  width: 100vw;
  padding: 1rem 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0.8rem 1rem -3px rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 10;
  top: 0;
  .name {
    font-weight: 400;
    font-size: 1.5rem;
    color: white;
  }
  .subname {
    font-weight: 300;
    font-size: 0.75rem;
    color: white;
  }
  svg {
    cursor: pointer;
    margin: 0 1rem;
    transition: 0.3s;
  }
  svg:hover {
    scale: 0.9;
  }
  @media (width < 500px) {
    .hireButton {
      display: none;
    }
  }
`;
interface Props {
  menuAction: Function;
}
const Header = ({ menuAction }: Props) => {
  return (
    <HeaderStyled>
      <Link to="/photography/">
        <Flex>
          <Logo color="white" size="2.5rem" />
          <div>
            <p className="name">David Zherdenovsky</p>
            <p className="subname">LANDSCAPE PHOTOGRAPHER</p>
          </div>
        </Flex>
      </Link>
      <Flex>
        <Link to="/photography/hire">
          <Button kind="outline" className="hireButton">
            Hire Me
          </Button>
        </Link>
        <MenuButton color="white" size="2.5rem" onClick={menuAction} />
      </Flex>
    </HeaderStyled>
  );
};

export default Header;
