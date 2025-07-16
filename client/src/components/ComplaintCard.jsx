import React from 'react';

const ComplaintCard = ({ complaint }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
    <h3>{complaint.category}</h3>
    <p><strong>Room:</strong> {complaint.roomNumber}</p>
    <p><strong>Description:</strong> {complaint.description}</p>
    <p><strong>Status:</strong> {complaint.status}</p>
    <p><strong>Priority:</strong> {complaint.priority}</p>
    <p><strong>Type:</strong> {complaint.type}</p>
  </div>
);

export default ComplaintCard;
