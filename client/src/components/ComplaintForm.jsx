import React, { useState } from 'react';

const ComplaintForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    user: '',
    roomNumber: '',
    category: '',
    description: '',
    type: 'hostel',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="user" placeholder="User" onChange={handleChange} required />
      <input name="roomNumber" placeholder="Room Number" onChange={handleChange} required />
      <input name="category" placeholder="Category" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <select name="type" onChange={handleChange}>
        <option value="hostel">Hostel</option>
        <option value="college">College</option>
      </select>
      <button type="submit">Submit Complaint</button>
    </form>
  );
};

export default ComplaintForm;
