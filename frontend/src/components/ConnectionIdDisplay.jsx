const ConnectionIdDisplay = ({ connectionId }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Your Connection ID:
        </label>
        <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-center">
          {connectionId}
        </div>
      </div>
    );
  };
  
  export default ConnectionIdDisplay;