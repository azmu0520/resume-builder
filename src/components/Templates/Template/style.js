import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background-color: red;
`;
export const PDF = styled.div`
  flex: 1;
  background-color: blue;
`;

export const Temp1 = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  .info {
    flex: 1;
    background-color: #323b4c;
    padding: 15px 20px;
    .img_wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
    }
    color: rgb(255, 255, 255);
    h2 {
      font-weight: 700;
      font-style: normal;
      font-size: 22.668px;
      padding-bottom: 5px;
      border-bottom: 1px solid #eee;
    }
    h4 {
      font-size: 13.3337px;
      line-height: 3px;
      margin-top: 20px;
    }
    span {
      font-weight: 400;
      font-size: 12px;
    }
    .edu {
      margin-top: 30px;
    }
    ul {
      font-weight: 400;
      font-size: 12px;
      padding: 0 20px;
      margin-top: 20px;
    }
    .lang {
      list-style: none;
      padding: 0;
    }
  }
  .description {
    flex: 3;
    background-color: #fff;
    padding: 40px 20px;
    font-style: normal;
    h1 {
      font-weight: 700;
      color: rgb(50, 59, 76);
      font-size: 42.6667px;
      line-height: 59px;
    }
    h3 {
      font-weight: 400;
      color: rgb(50, 59, 76);
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.214em;
    }
    p {
      font-weight: 400;
      color: rgb(115, 115, 115);
      font-size: 12px;
      margin-bottom: 40px;
    }
    .title {
      font-weight: 700;
      color: rgb(50, 59, 76);
      font-size: 22.668px;
      border-bottom: 1px solid rgb(50, 59, 76);
      line-height: 31px;
      padding-bottom: 5px;
      margin-bottom: 20px;
    }

    .box {
      position: relative;
      font-style: normal;
      color: rgb(115, 115, 115);
      padding-top: 20px;
      border-left: 1px solid rgb(50, 59, 76);
      padding-left: 10px;
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: -7px;
        background-color: #fff;
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid rgb(50, 59, 76);
      }
      .years {
        font-weight: 700;
        font-size: 13.3333px;
        line-height: 23px;
      }
      .name {
        font-size: 13.3333px;
        line-height: 23px;
      }
      .job_title {
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 5px;
      }
      ul {
        font-size: 12px;
        line-height: 18px;
        padding: 0 20px;
      }
    }
  }
`;
