import styled from "styled-components";
import price from "../../assets/images/price.png";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  height: 190px;
  /* padding: 50px 20px; */
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 40px 0 rgb(0 0 0 / 11%);
  img {
    width: 300px;
  }
  h2 {
    font-size: 2rem;
    line-height: 1.4;
    color: #13287e;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 100px 0;
  gap: 30px;
  .card {
    padding: 0 0px 40px;
    margin-bottom: 30px;
    position: relative;
    z-index: 2;
    border-radius: 6px;
    box-shadow: 0 5px 40px 0 rgb(0 0 0 / 11%);
    .header {
      margin-bottom: 20px;
      padding: 40px 30px;
      text-align: right;
      background: url(${price}) no-repeat top right;
      background-size: 60%;
      height: 180px;
      h1 {
        font-size: 40px;
        font-weight: 700;
        color: #fff !important;
        margin-bottom: 10px;
        line-height: 1;
      }
      h5 {
        color: #00ffff;
        font-size: 16px;
        margin-bottom: 20px;
      }
    }

    .details {
      padding: 0 30px;
      h2 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #13287e;
        span {
          font-size: 14px;
          background: #e8f3fd;
          padding: 5px 15px;
          position: relative;
          top: -5px;
          border-radius: 30px;
          color: #1d88ed;
        }
      }
      p {
        color: #888;
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;
