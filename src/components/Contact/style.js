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
  }
`;
