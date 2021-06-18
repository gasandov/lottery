import styled from "styled-components";

export const BoardContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(5, 18vw);
  grid-template-columns: repeat(5, 16vw);
`;

export const CardItem = styled.div``;

export const CardImage = styled.img`
  width: 15vw;
  height: 17vw;
  box-shadow: 5px 5px 5px;
  &:hover {
    opacity: 0.4;
  }
  opacity: ${({ clicked }) => (clicked ? 0.4 : 1)};
`;
