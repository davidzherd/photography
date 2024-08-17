import { workshops } from "./assets/workshopConfig";
import { Button } from "./components/Button";
import { CardStyled } from "./components/Card";
import { Flex } from "./components/styled/Flex.styled";
import { Text } from "./components/styled/Text.styled";

function Hire() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Flex direction="column" mt="7rem">
        <Text size={5} weight="700" color="#333">
          JOIN A WORKSHOP
        </Text>
        <div>
          {workshops.map((workshop) => (
            <CardStyled
              image={workshop.image}
              key={workshop.id}
              style={{ marginBlock: "2rem" }}
            >
              <Text size={3} weight="700">
                {workshop.title}
              </Text>
              <div className="details">
                <Text size={3} weight="700" style={{ marginBlock: "1rem" }}>
                  GOING TO: {workshop.title}
                </Text>
                <Text weight="700">STARTING AT: {workshop.date}</Text>
                <Text weight="700">
                  DURATION: {workshop.duration}{" "}
                  {workshop.duration > 1 ? "WEEKS" : "WEEK"}
                </Text>
                <Text weight="700">MEETING AT: {workshop.meetup}</Text>
                <Text weight="700">PRICE: {workshop.price}</Text>
                <Button kind="outline">JOIN NOW</Button>
              </div>
            </CardStyled>
          ))}
        </div>
      </Flex>
    </div>
  );
}

export default Hire;
