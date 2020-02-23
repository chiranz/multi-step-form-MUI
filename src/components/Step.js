import React from "react";

export default function Step({ steps, currentStep }) {
  let background;
  let color;
  const tickMark = <>&#x2714;</>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "200px",
        margin: "2em 0"
      }}
    >
      {steps.map((step, i) => {
        background =
          currentStep === i + 1
            ? "blue"
            : currentStep > i + 1
            ? "green"
            : "#dddddd";
        color = currentStep >= i + 1 ? "#ffffff" : "#666666";
        return (
          <div
            style={{
              color: color,
              backgroundColor: background,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem"
            }}
          >
            {step < currentStep ? tickMark : step}
          </div>
        );
      })}
    </div>
  );
}
