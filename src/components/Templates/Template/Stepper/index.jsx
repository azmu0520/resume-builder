import { useState } from "react";
import {
  Stepper,
  MobileStepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Wrap, MUI } from "./style";
import Personal from "../../components/Personal";

const steps = [<Personal key="1" />, "Create an ad group", "Create an ad"];
export default function MuiStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Wrap>
      <MUI.Progress
        variant="progress"
        steps={3}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1 }}
      />
      {/* <MUI.Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MUI.Stepper> */}
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>{steps[activeStep]}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button type="submit" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Wrap>
  );
}
