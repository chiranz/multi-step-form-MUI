import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function FormUserDetails({
  handleNext,
  values: { firstName, lastName, email },
  actions: { setFirstName, setLastName, setEmail }
}) {
  console.log(firstName);
  return (
    <>
      <h3>Enter user details</h3>
      <TextField
        placeholder="Enter your first name"
        label="First Name"
        onChange={e => setFirstName(e.target.value)}
        defaultValue={firstName}
      />
      <br />
      <TextField
        placeholder="Enter your last name"
        label="Last Name"
        onChange={e => setLastName(e.target.value)}
        defaultValue={lastName}
      />
      <br />
      <TextField
        placeholder="Enter your email"
        label="Email"
        onChange={e => setEmail(e.target.value)}
        defaultValue={email}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        style={{ margin: 15 }}
        onClick={handleNext}
      >
        Continue
      </Button>
    </>
  );
}
