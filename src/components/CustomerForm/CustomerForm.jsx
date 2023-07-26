import React, { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerName.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  const newInputColor = (e) => {
    const newValue = e.target.value;
    if (newValue.trim().length > 0) {
      setIsValid(true);
    }
    setCustomerName(newValue)
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        className="customer-input"
        type="text"
        placeholder="Add a new customer"
        value={customerName}
        onChange={newInputColor}
        style={{
          backgroundColor: isValid ? "" : "red",
        }}
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
