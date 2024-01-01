import styled from "styled-components";
import ring from "../../assets/images/ring-bg.png";

export const Wrap = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: url(${ring}) no-repeat center center;
  background-size: cover;
  @media (max-width: 1200px) {
    height: fit-content;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  .card {
    width: 100%;
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in;
    overflow: hidden;
    background: #fff;
    margin-bottom: 30px;
    border: 2px solid transparent;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      cursor: pointer;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 90px;
    }
  }
  .card:hover {
    box-shadow: 0 0 2rem -0.5rem #e44747;
    border: 2px solid #e44747;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    .card {
      button {
        height: 35px !important;
        font-size: 13px !important;
      }
    }
  }
`;
