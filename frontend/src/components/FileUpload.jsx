// src/components/FileUpload.js
import React from 'react';

const FileUpload = ({ handleFileUpload }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">
        Select File to Share:
      </label>
      <input
        type="file"
        onChange={handleFileUpload}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
      />
    </div>
  );
};

export default FileUpload;
