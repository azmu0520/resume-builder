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
`;
