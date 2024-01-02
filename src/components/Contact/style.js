import styled from "styled-components";

export const Wrap = styled.div`
  margin: 50px 0;
  form {
    width: 80%;
    margin: auto;
    .input_group {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      gap: 15px;

      input {
        height: 45px;
      }
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #13287e !important;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      }
    }
    input[type="submit"] {
      height: 48px;
      line-height: 48px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1px;
      display: inline-block;
      padding: 0 20px;
      text-align: center;
      text-transform: uppercase;
      border-radius: 7px;
      background: rgb(62, 148, 228);
      color: #fff;
      outline: none;
      border: none;
    }
    a {
      color: #888;
      font-size: 15px;
      text-decoration: none;
      margin-left: 15px;
      span {
        color: #007bff;
      }
    }
  }
  @media (max-width: 1000px) {
    form {
      width: 90% !important;
    }
  }
`;
