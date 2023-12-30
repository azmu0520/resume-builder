import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .spans {
    display: flex;
    align-items: center;
    margin: 1rem auto;
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
    text-align: center;
    color: #13287e;
  }

  p {
    line-height: 1.9;
    margin: 0 auto;
    font-size: 15px;
    color: #888;
    margin-bottom: 1rem;
    width: 40%;
    text-align: center;
  }
`;
