import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 100px;

  .modal {
    width: 40% !important;
    height: 100vh !important;
    display: flex;
    align-items: center;
    background-color: red !important;
  }
`;

export const MuModal = styled.div`
  display: flex;
  width: 40%;
  height: 100vh;
  background-color: red;
  outline: none;
  .menu_links {
    display: flex;
    flex-direction: column;
    padding: 20px;

    button {
    }
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
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
  .menu {
    display: none;
  }
  @media (max-width: 1200px) {
    .links {
      display: none;
    }
    .menu {
      display: block;
      cursor: pointer;
    }
    .logo {
      height: 50px;
      font-size: 20px;
    }
    .links {
      button {
        max-height: 32px !important;
      }
    }
  }
`;
export const OutletWrap = styled.div``;
