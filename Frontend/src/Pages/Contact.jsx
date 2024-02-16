import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import the toast module
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to handle form submission, such as sending the data to a server
    console.log('Form submitted:', formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      name: '',
      phoneNumber: '',
      address: ''
    });

    // Show a toast notification after form submission
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
