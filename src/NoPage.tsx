import { Flex } from "./components/styled/Flex.styled";
import { Text } from "./components/styled/Text.styled";
import { Wrapper } from "./components/styled/Wrapper.styled";

function NoPage() {
  return (
    <Flex direction="column" mt="10rem">
      <Text size={20} weight="700" color="#333">
        404
      </Text>
      <Text size={2} weight="300" color="#333">
        Oops... seems like your ISO is too high - it's all white!
      </Text>
      <Wrapper mt="1rem">
        <Text size={1.5} weight="300" color="#333">
          Try using the menu, or go back to the home page.
        </Text>
      </Wrapper>
    </Flex>
  );
}

export default NoPage;
