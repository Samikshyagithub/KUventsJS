import React, { useState } from "react";
import axios from "axios";
import "./Register.scss";
import { images } from "../../constants";

const Register = ({ date, time, eventId }) => {
  const [payment, setPayment] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_HOST}/events/:eventId/payments`, {
        amount: 1,
        eventId: eventId,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPayment(true);
        console.log(payment);
      });
  };

  const handleBookNow = () => {
    // Add any additional logic or validation for name and email if needed
    console.log("Name:", name);
    console.log("Email:", email);
    // Call the handlePayment function or any other logic you need for booking
    handlePayment();
  };

  return (
    <div className="ticket">
      <div className="ticket__heading">
        <h1
          style={{
            padding: "0",
            margin: "0",
          }}
        >
          Date & Time
        </h1>
      </div>
      <div className="ticket__time">
        <h2>
          Saturday, {date}, {time}
        </h2>
      </div>
      <div className="ticket__book">
        {/* Display Name and Email input fields */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Display the "Book Now" button */}
        <button className="button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Register;
