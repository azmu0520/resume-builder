import styled from "styled-components";
import price from "../../assets/images/price.png";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  @media (max-width: 1400px) {
    height: fit-content;
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

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
    height: fit-content;
    .item {
      grid-column: span 2;
    }
  }
  @media (max-width: 900px) {
    .card {
      padding: 0 0px 25px;
      margin-bottom: 15px;
      .header {
        margin-bottom: 15px;
        padding: 20px 15px;
        background-size: 80%;
        height: 140px;
        h1 {
          font-size: 27px;
          margin-bottom: 8px;
        }
        h5 {
          font-size: 14px;
          margin-bottom: 16px;
        }
      }
      .details {
        padding: 0 10px;
        h2 {
          font-size: 18px;
          margin-bottom: 14px;
          span {
            font-size: 12px;
            padding: 2px 8px;
          }
          p {
            margin-bottom: 14px;
            font-size: 14px;
          }
        }
      }
      button {
        height: 40px !important;
        font-size: 12px !important;
      }
    }
  }
  @media (max-width: 500px) {
    .card .header {
      background-size: 100%;
    }
  }
`;
