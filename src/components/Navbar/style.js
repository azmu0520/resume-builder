import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  height: 90px;
  margin: 0 auto;
  .logo {
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 26px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    img {
      height: 100%;
    }
  }
  .logo:hover {
    color: rgb(29 136 237);
  }

  .links {
    display: flex;
    align-items: center;
    a {
      padding: 0 12px;
      display: block;
      height: 35px;
      font-size: 16px;
      font-weight: 600;
      line-height: 34px;
    }
    a:hover {
      color: rgb(29 136 237);
    }
    button {
      margin-right: 20px;
      a {
        color: #fff !important;
      }
    }
  }
`;
export const OutletWrap = styled.div``;
