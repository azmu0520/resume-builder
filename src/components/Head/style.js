import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ img }) => `url(${img})`} no-repeat center;
  background-size: cover;
  height: 40vh;

  color: #fff;
  font-size: 22px;
  text-shadow: 4px 4px 6px rgba(255, 255, 255, 1);
  h2 {
    font-size: 32px;
  }
`;
