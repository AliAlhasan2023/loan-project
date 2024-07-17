import Model from "./Model";
import "./App.css";
import { useState } from "react";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone number format is incorrect ");
    }
    setShowModal(true);
  }
  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  return (
    <div onClick={handleDivClick}>
      <form>
        <h1>Requesting a Loan</h1>
        <hr />
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />

        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />

        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />

        <label>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}>
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          className={btnIsDisabled ? "disabled" : ""}
          id="submit-loan-btn">
          Submit
        </button>
      </form>
      <Model isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}
