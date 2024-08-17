import { styled } from "styled-components";

export const Text = styled.p<{
  size?: number;
  weight?: string;
  color?: string;
}>`
  font-size: ${({ size }) =>
    size === undefined || null ? "inherit" : size + "rem"};
  font-weight: ${({ weight }) => weight ?? "400"};
  color: ${({ color }) => color ?? "white"};
  display: inline-block;
  @media (width < 750px) {
    font-size: ${({ size }) =>
      size === undefined ? "1rem" : size / 2 + "rem"};
    overflow: hidden;
  }
`;
