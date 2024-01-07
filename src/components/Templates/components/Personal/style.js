import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrap = styled(Box)`
  width: 100%;
  padding: 22px 20px 0px;
  h3 {
    line-height: 32px;
    font-weight: 600;
    font-size: 16px;
    color: rgb(30, 32, 33);
  }
  p {
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    color: #969b9e;
    margin-bottom: 30px;
  }

  .mr_bt20 {
    margin-bottom: 20px;
  }
`;

export const Item = styled.div`
  display: flex;

  margin: 20px 0;
`;

export const ImageWrap = styled.div`
  display: flex;
  .img label {
    display: block;
    width: 150px;
    height: 150px;
    cursor: pointer;
    img {
      max-width: 100%;
      width: 100%;
      max-height: 100%;
      height: 100%;
    }
  }
`;
