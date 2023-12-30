import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 50px;
  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 30px 15px;
    box-shadow: 0 5px 40px 0 rgb(0 0 0 / 11%);
    background: #fff;
    border-radius: 15px;
    img {
      margin-bottom: 20px;
      min-height: 56px;
    }
    h3 {
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 17px;
      width: 80%;
      text-align: center;
    }
    p {
      color: #888;
      font-size: 16px;
      text-align: center;
      width: 90%;
    }
  }
`;
