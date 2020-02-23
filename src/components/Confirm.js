import React from "react";
import Button from "@material-ui/core/Button";

export default function Confirm({
  values: { firstName, lastName, email, city, occupation, bio },
  handleBack,
  handleNext
}) {
  return (
    <>
      <h4>{firstName}</h4>
      <h4>{lastName}</h4>
      <h4>{email}</h4>
      <h4>{occupation}</h4>
      <h4>{city}</h4>
      <h4>{bio}</h4>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="default"
          style={{ margin: 15 }}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: 15 }}
          onClick={handleNext}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
