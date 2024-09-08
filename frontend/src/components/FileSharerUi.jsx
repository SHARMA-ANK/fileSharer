// src/components/FileSharerUI.js
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';  // uuid library to generate unique IDs
import Header from './Headers';
import ConnectionIdDisplay from './ConnectionIdDisplay';
import ConnectionIdInput from './ConnectionIdInput';
import FileUpload from './FileUpload';
import ActionButtons from './Buttons';

const FileSharerUI = () => {
  const [connectionId, setConnectionId] = useState('');
  const [file, setFile] = useState(null);
  const [enteredConnectionId, setEnteredConnectionId] = useState('');

  // Generate unique Connection ID when the component mounts
  useEffect(() => {
    const generatedConnectionId = uuidv4(); // Generate unique ID
    setConnectionId(generatedConnectionId);
  }, []);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const connectToUser = () => {
    console.log('Connecting to user with Connection ID:', enteredConnectionId);
  };

  const sendFile = () => {
    if (file) {
      console.log('Sending file:', file);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-bl from-blue-500 to-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <Header />
        
        {/* Display the unique Connection ID */}
        <ConnectionIdDisplay connectionId={connectionId} />

        {/* Input to enter the other user's Connection ID */}
        <ConnectionIdInput
          connectionId={enteredConnectionId}
          setConnectionId={setEnteredConnectionId}
        />
        
        <FileUpload handleFileUpload={handleFileUpload} />
        <ActionButtons connectToUser={connectToUser} sendFile={sendFile} />
      </div>
    </div>
  );
};

export default FileSharerUI;
