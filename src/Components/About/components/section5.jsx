import React, { useState } from "react";
import "./section5.css";
const Section5 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending data to backend or displaying it
    console.log("Form data submitted: ", formData);
  };

  return (
    <div className="sec5main">
      <div className="sec5main1">
        <div className="sec5txt">
          <div className="uppertxt">
            <p className="up1">Make an Appointment</p>
          </div>
          <div className="downtxt">
            <p className="up2">Get Recommendations from a personal stylist</p>
          </div>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="transparent-form">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Number"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Book an Appointment</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Section5;
