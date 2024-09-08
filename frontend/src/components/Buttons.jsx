// src/components/ActionButtons.js
import React from 'react';

const ActionButtons = ({ connectToUser, sendFile }) => {
  return (
    <div className="flex justify-between">
      <button
        onClick={connectToUser}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Connect
      </button>
      <button
        onClick={sendFile}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Send File
      </button>
    </div>
  );
};

export default ActionButtons;
