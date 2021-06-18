import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const Modal = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  padding-top: 50%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  display: flex;
  font-size: 15vw;
  justify-content: center;
  background-color: transparent;
  color: white;
`;

export const Button = styled.button`
  margin: 1em 0.1em 0em 1em;
  /* color: #ffffff; */
  /* border-radius: 2em; */
  /* padding: 0.3em 1.2em; */
  /* box-sizing: border-box; */
  /* border: 0.1em solid black; */
  /* background-color: ${({ color }) => color}; */
  /* &:hover {
    opacity: 0.4;
  } */
`;
