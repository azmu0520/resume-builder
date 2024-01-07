import styled from "styled-components";
import { Stepper, MobileStepper, Step, StepLabel } from "@mui/material";
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MUI = styled.div``;

MUI.Stepper = styled(Stepper)``;

MUI.Progress = styled(MobileStepper)`
  /* .MuiPaper-root {
    width: 100% !important;
    background-color: white !important;
  } */
  .css-1be5mm1-MuiLinearProgress-root-MuiMobileStepper-progress {
    width: 100% !important;
    background-color: #e7ebee;
  }
`;
