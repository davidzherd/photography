import { Flex } from "./components/styled/Flex.styled";
import { Text } from "./components/styled/Text.styled";
import { Button } from "./components/Button";
import { Wrapper } from "./components/styled/Wrapper.styled";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/27253892/pexels-photo-27253892.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
        id="wallpaper"
      />
      <Flex direction="column" mt="40rem">
        <Text size={4}>DAVID ZHERDENOVSKY</Text>
        <Text size={2} weight="300">
          LANDSCAPE PHOTOGRAPHER
        </Text>
        <Wrapper mt="2rem">
          <Link to="/photography/about">
            <Button kind="fill">About Me</Button>
          </Link>
        </Wrapper>
      </Flex>
    </>
  );
}

export default Home;
