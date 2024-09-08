// src/components/ConnectionIdInput.js
import React from 'react';

const ConnectionIdInput = ({ connectionId, setConnectionId }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">
        Enter Connection ID to Connect:
      </label>
      <input
        type="text"
        value={connectionId}
        onChange={(e) => setConnectionId(e.target.value)}
        placeholder="Enter Connection ID"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default ConnectionIdInput;
