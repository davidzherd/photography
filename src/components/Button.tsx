import { styled } from "styled-components";

export const Button = styled.button<{ kind?: string }>`
  border: ${({ kind }) => (kind === "outline" ? "solid 2px white" : "none")};
  background-color: ${({ kind }) =>
    kind === "outline" ? "transparent" : "#FFF"};
  color: ${({ kind }) => (kind === "outline" ? "white" : "black")};
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    scale: 0.95;
    background-color: ${({ kind }) => kind === "outline" && "white"};
    color: ${({ kind }) => kind === "outline" && "#333"};
    opacity: ${({ kind }) => kind !== "outline" && "0.8"};
  }
`;
