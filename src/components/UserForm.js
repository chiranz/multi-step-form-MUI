import React, { useState } from "react";
import Step from "./Step";
import CurrentForm from "./CurrentForm";

export default function UserForm() {
  const [step, setStep] = useState(1);
  const steps = [1, 2, 3];
  // Proceed to the next step
  const handleNext = e => {
    e.preventDefault();
    setStep(step => step + 1);
  };
  // Proceed to the previous step
  const handleBack = e => {
    e.preventDefault();
    setStep(step => step - 1);
  };

  return (
    <>
      {step < 4 && <Step currentStep={step} steps={steps} />}
      <CurrentForm
        step={step}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </>
  );
}
