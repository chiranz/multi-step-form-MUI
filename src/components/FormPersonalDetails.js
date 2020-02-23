import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function FormPersonalDetails({
  handleBack,
  handleNext,
  actions: { setCity, setOccupation, setBio },
  values: { city, occupation, bio }
}) {
  return (
    <>
      <h3>Enter user details</h3>
      <TextField
        placeholder="Enter your city"
        label="City"
        onChange={e => setCity(e.target.value)}
        defaultValue={city}
      />
      <br />
      <TextField
        placeholder="Enter your occupation"
        label="Occupation"
        onChange={e => setOccupation(e.target.value)}
        defaultValue={occupation}
      />
      <br />
      <TextField
        placeholder="Enter your bio"
        label="Bio"
        onChange={e => setBio(e.target.value)}
        defaultValue={bio}
      />
      <br />
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
          Continue
        </Button>
      </div>
    </>
  );
}
