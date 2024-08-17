import { Text } from "./styled/Text.styled";
interface Props {
  right: boolean;
  color: string;
  size: number;
}
function Arrow({ right, color, size }: Props) {
  return (
    <div>
      <Text
        size={size}
        weight="300"
        color={color}
        style={{ cursor: "pointer" }}
      >
        {right ? "Next" : "Previous"}
      </Text>
    </div>
  );
}

export default Arrow;
