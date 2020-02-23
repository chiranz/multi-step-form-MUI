import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export default function CurrentForm({ step, handleNext, handleBack }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [bio, setBio] = useState("");

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          handleNext={handleNext}
          actions={{ setFirstName, setLastName, setEmail }}
          values={{ firstName, lastName, email }}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          handleBack={handleBack}
          handleNext={handleNext}
          actions={{ setCity, setOccupation, setBio }}
          values={{ city, occupation, bio }}
        />
      );
    case 3:
      return (
        <Confirm
          handleBack={handleBack}
          handleNext={handleNext}
          values={{ firstName, lastName, email, city, occupation, bio }}
        />
      );
    case 4:
      return <Success />;
    default:
      return <FormUserDetails />;
  }
}
