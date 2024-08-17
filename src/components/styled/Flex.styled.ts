import { styled } from "styled-components";

export const Flex = styled.div<{
  direction?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
}>`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction ?? "row"};
  margin-top: ${({ mt }) => mt ?? "0"};
  margin-right: ${({ mr }) => mr ?? "0"};
  margin-bottom: ${({ mb }) => mb ?? "0"};
  margin-left: ${({ ml }) => ml ?? "0"};
`;
