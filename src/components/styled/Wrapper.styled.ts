import { styled } from "styled-components";

export const Wrapper = styled.div<{
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  side?: string;
}>`
  margin-top: ${({ mt }) => mt ?? "0"};
  margin-right: ${({ mr }) => mr ?? "0"};
  margin-bottom: ${({ mb }) => mb ?? "0"};
  margin-left: ${({ ml }) => ml ?? "0"};
  padding-top: ${({ pt }) => pt ?? "0"};
  padding-right: ${({ pr }) => pr ?? "0"};
  padding-bottom: ${({ pb }) => pb ?? "0"};
  padding-left: ${({ pl }) => pl ?? "0"};
  ${({ side }) => `${side}:0`};
  ${({ side }) => (side ? "position: fixed" : null)};
  z-index: 10;
`;
