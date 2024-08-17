import { Flex } from "./components/styled/Flex.styled";
import { Text } from "./components/styled/Text.styled";

function About() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Flex direction="column" mt="7rem">
        <Text size={8} weight="700" color="#333">
          About me.
        </Text>
        <Flex direction="column" mr="1rem" ml="1rem">
          <img
            src="https://ca.slack-edge.com/T215DPJ73-U04G3K05NNM-31f5d0283c91-512"
            alt="me"
            style={{ objectFit: "contain", borderRadius: "50%" }}
          />
          <div style={{ marginBlock: "2rem", marginInline: "10%" }}>
            <Text size={3} weight="300" color="#333">
              Hi, my name is David.
            </Text>
            <Text size={2} weight="300" color="#333">
              I got into photography at the age of 16, and fell in love with the
              ability to capture a moment in time and edit it to be saved
              forever. Today I do landscape photography for a living and invite
              you to join one of my photography trips to learn new techniques
              and experience new places.
            </Text>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

export default About;
