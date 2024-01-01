import styled from "styled-components";
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  height: 80vh;
  gap: 50px;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Container = styled.div``;
export const Cards = styled.div`
  flex: 1;

  .card {
    display: flex;
    align-items: center;
    padding: 25px 20px 15px;
    margin-bottom: 20px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0px 2px 27px 0px rgba(154, 161, 171, 0.18);
    -webkit-box-shadow: 0px 2px 27px 0px rgba(154, 161, 171, 0.18);

    img {
      width: 60px;
      object-fit: contain;
      margin-right: 10px;
    }
    h3 {
      color: #13287e;
      font-size: 18px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      color: #888;
      margin-top: 8px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    gap: 20px;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  .spans {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .spans span {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .spans span:nth-child(1) {
    background-color: #00a8ff;
  }
  .spans span:nth-child(2) {
    background-color: #9c88ff;
  }
  .spans span:nth-child(3) {
    background-color: #fbc531;
  }
  .spans span:nth-child(4) {
    background-color: #4cd137;
  }
  .spans span:nth-child(5) {
    background-color: #487eb0;
  }
  .spans span:nth-child(6) {
    background-color: #e84118;
  }
  .spans span:nth-child(7) {
    background-color: #8c7ae6;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
    color: #13287e;
  }

  p {
    line-height: 1.9;
    font-size: 15px;
    color: #888;
    margin-bottom: 1rem;
  }

  .check {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    padding: 10px 0;
    img {
      margin-right: 16px;
      width: 30px;
      height: 30px;
    }
  }
  .h2 {
    margin-bottom: 20px;
    font-size: 30px;
  }

  .terms {
    color: #007bff;
    margin: 10px 0 5px 0;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 27px;
    }
    p {
      font-size: 13px;
    }
    .check {
      font-size: 14px;
    }
    .h2 {
      font-size: 27px;
    }
  }
`;

export const Deliver = styled.div`
  display: flex;
  height: 60vh;
  .content {
    flex: 1;
  }
  .img {
    flex: 1;
    img {
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding: 0 20px;
    .img {
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;
