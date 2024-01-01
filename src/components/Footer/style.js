import styled from "styled-components";
import footer from "../../assets/images/footer-bg1.png";

export const Wrap = styled.div`
  display: flex;

  justify-content: center;
  /* align-items: center; */
  height: 340px;
  padding: 80px 100px;
  margin-top: 100px;
  background: url(${footer}) no-repeat;
  background-size: cover;

  .item {
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 0 40px;
    .title {
      font-size: 14px;
      color: #fff;
      line-height: 1.4;
      font-weight: 500;
    }
    span {
      font-size: 14px;
      color: #d3cdcd;
      cursor: pointer;
    }
    span:hover {
      color: #0056b3;
    }
    .img_wrap {
      color: #fff;
      font-size: 20px;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
    }
    p {
      margin-bottom: 10px;
      color: #fff !important;
      font-size: 13px;
    }
    .links {
      display: flex;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
  @media (max-width: 1300px) {
    height: fit-content;
    padding: 60px 80px;
    margin-top: 60px;
  }
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    .item {
      .img_wrap {
        font-size: 16px;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    background: #192057;
    padding: 30px 0;
  }
`;
