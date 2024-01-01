import styled from "styled-components";

export const Wrap = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #eee;
  position: relative;
  margin: 0 15px;
  overflow: hidden;
  padding: 30px 20px;

  .img_wrap {
    height: 100px;
    width: 100px;
    margin: auto;
    img {
      display: block;
      width: 100%;
      border-radius: 50%;
    }
  }
  h3 {
    color: #13287e;
    font-size: 20px;
    font-weight: 600;
  }

  p {
    color: #888;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 25px;
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 900px) {
    margin: 0 10px;
    .img_wrap {
      width: 80px;
      height: 80px;
    }
  }
  h3 {
    font-size: 16px;
  }
  p {
    margin-top: 16px;
    margin-bottom: 18px;
    font-size: 13px;
  }
`;
