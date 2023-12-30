import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  margin: 50px 0;
  gap: 50px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .sup_title {
    width: fit-content;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    position: relative;
    letter-spacing: 0.58px;
    font-size: 14px;
    line-height: 24px;
    /* background-color: #d5d5ea; */
    color: #3e94e4;
    font-weight: 600;
    position: relative;
    img {
      position: relative;
      z-index: 10;
      margin-right: 10px;
    }
  }
  .sup_title::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background-image: linear-gradient(to bottom right, #766ee6 0, #3540b0); */
    border-radius: 100px;
    background: #e8f3fd;
    opacity: 1;
  }
  span {
    position: relative;
    z-index: 10;
  }

  .title {
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #13287e;
  }

  p {
    font-size: 18px;
    color: #888;
    margin-bottom: 30px;
  }

  .btn {
  }
`;
export const Image = styled.div`
  img {
    max-width: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
