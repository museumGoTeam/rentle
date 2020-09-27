import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Grid from "@material-ui/core/Grid";
import CustomButton from "./CustomButton";
import { useHistory } from "react-router-dom";

type CustomStepperProps = {
  steps: string[];
  stepNodes: React.ReactNode[];
  onSubmit: () => void
};


const CustomStepper: React.FC<CustomStepperProps> = ({ steps, stepNodes, onSubmit }) => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const history = useHistory()

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const isLastStep = () => activeStep == (steps.length - 1)

  const handleNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevState) => prevState - 1);
    if (activeStep === 0) history.push("/")
  };



  return (
    <div style={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          if (isStepSkipped(index)) stepProps.completed = false;
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid container>
        {stepNodes[activeStep]}
        <Grid item container justify="center">
        <CustomButton label="Retour" onClick={handlePrevious}  style={{marginRight: 12}} />
        {
          isLastStep() ? <CustomButton label="Valider" onClick={() => onSubmit()}  /> : <CustomButton label="Continuer" onClick={() => handleNext()} />
        }
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomStepper;
