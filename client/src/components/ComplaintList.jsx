import React from 'react';
import ComplaintCard from './ComplaintCard';

const ComplaintList = ({ complaints }) => {
  return (
    <div>
      {complaints.map((comp) => (
        <ComplaintCard key={comp._id} complaint={comp} />
      ))}
    </div>
  );
};

export default ComplaintList;
